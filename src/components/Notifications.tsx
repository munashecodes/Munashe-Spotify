import { useEffect, useState } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const SlideInNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const addNotification = (message: string) => {
    const newNotification = {
      id: Date.now(), 
      text: message,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotif = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
      <AnimatePresence>
        {notifications.map((n) => (
          <Notification removeNotif={removeNotif} {...n} key={n.id} />
        ))}
      </AnimatePresence>
      <button 
        onClick={() => addNotification("Your custom message here!")} // Example button to trigger notification
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Add Notification
      </button>
    </div>
  );
};

const NOTIFICATION_TTL = 5000;

const Notification = ({
  text,
  id,
  removeNotif,
}: NotificationType & { removeNotif: Function }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
    >
      <FiCheckSquare className="mt-0.5" />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

export default SlideInNotifications;

type NotificationType = {
  id: number;
  text: string;
};