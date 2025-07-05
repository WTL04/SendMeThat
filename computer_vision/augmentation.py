import cv2
import numpy as np
import random

class Data_Augmentation():
    
    # brightness (50 for brighter)
    @staticmethod
    def brightness(img, brightness_factor=50):
        return cv2.convertScaleAbs(img, alpha=1.0, beta=brightness_factor)
    
    # contrast
    @staticmethod
    def contrast(img, contrast_factor=3):
        return cv2.convertScaleAbs(img, alpha=contrast_factor, beta=1.0)
    
    # gamma 
    # random rotation
    