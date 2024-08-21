"use client";

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface AlertNotificationProps {
  showAlert: boolean;
  handleCloseAlert: () => void;
}

const AlertNotification: React.FC<AlertNotificationProps> = ({ showAlert, handleCloseAlert }) => {
  return (
    <AnimatePresence>
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4"
        >
          <Alert className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg text-gray-800 rounded-2xl shadow-lg p-4 border border-white border-opacity-20">
            <AlertTitle className="font-bold">
              Item added to cart
            </AlertTitle>
            <AlertDescription>
              The item has been successfully added to your cart.
            </AlertDescription>
            <Button
              className="hover:bg-blue-600 text-white rounded-full mt-2 transition-colors duration-300 "
              onClick={handleCloseAlert}
            >
              Close
            </Button>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertNotification;