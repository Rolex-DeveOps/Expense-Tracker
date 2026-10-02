import React, { useState } from 'react'
import EmojiPicker from "emoji-picker-react"
import { LuImage,LuX } from 'react-icons/lu'

const EmojiPickerPopup = ({ icon, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-6">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();   // 🔥 VERY IMPORTANT
          setIsOpen(true);
        }}
      >
        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-purple-50 text-primary rounded-lg">
          {icon ? <span>{icon}</span> : <LuImage />}
        </div>
        <p>{icon ? "Change Icon" : "Pick Icon"}</p>
      </div>

      {isOpen && (
        <div
          className="absolute z-50 mt-2"
          onClick={(e) => e.stopPropagation()} // 🔥 STOP BUBBLING
        >
          <button
            className="absolute -top-2 -right-2 bg-white rounded-full p-1"
            onClick={() => setIsOpen(false)}
          >
            <LuX />
          </button>

          <EmojiPicker
            onEmojiClick={(emojiData) => {
              onSelect(emojiData.emoji);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};


export default EmojiPickerPopup
