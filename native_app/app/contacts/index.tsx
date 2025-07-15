// app/contacts/index.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ContactsScreen() {
  // contacts : state variable to store array of contact objects
  // setContacts : function to update contact list 
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

  // asking user for permission when screen loads, if granted get contact information
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === "granted") {

        // getting contacts with name, photo, and phone numbers
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.Name,
            Contacts.Fields.Image,
            Contacts.Fields.PhoneNumbers,
          ]
        });

        // save contacts into state
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      {contacts.map((contact) => (
        <View key={contact.id} style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center' }}>
          {/* Show the contact's photo if available, else show a grey circle */}
          {contact.imageAvailable && contact.image?.uri ? (
            <Image
              source={{ uri: contact.image.uri }}
              style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
            />
          ) : (
            <View
              style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#ccc', marginRight: 10 }}
            />
          )}

          <View>
            <Text style={{ fontSize: 16 }}>{contact.name}</Text>
            {contact.phoneNumbers?.[0] && (
              <Text style={{ color: 'gray' }}>{contact.phoneNumbers[0].number}</Text>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );

}
