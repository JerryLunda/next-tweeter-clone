"use client";
import React, { useState } from "react";
import Image from "next/image";
import user_profile from "../../../public/user_profile.jpg";
import cloudUploadIcon from "../../../public/cloudUploadIcon.png";
import gif_icon from "../../../public/gif_icon.svg";
import signal_icon from "../../../public/signal_icon.svg";
import sticker_icon from "../../../public/sticker_icon.svg";
import date_icon from "../../../public/date_icon.svg";

const FormTweet = () => {
  const [tweetText, setTweetText] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetText(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(tweetText);
    console.log(selectedFile); // Do something with the selected file
  };
  return (
    <div className="flex gap-3 pt-2 px-2">
      <Image src={user_profile} alt="" className="size-12 rounded-full" />
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-3 pt-6 pb-8 mb-4 w-10/12"
      >
        <div className="mb-4">
          <textarea
            className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tweetText"
            placeholder="What's on your mind?"
            value={tweetText}
            onChange={handleInputChange}
            maxLength={280}
            rows={3}
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className=" flex items-center gap-3">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer flex items-center text-gray-600"
            >
              <Image src={cloudUploadIcon} alt="icon" />
            </label>
            <Image src={gif_icon} alt="icon" />
            <Image src={signal_icon} alt="icon" />
            <Image src={sticker_icon} alt="icon" />
            <Image src={date_icon} alt="icon" />
          </div>
          <div className="flex gap-3 items-center">
            <button
              className="bg-[#1DA1F2] hover:bg-[#1DA1F3] text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Tweet
            </button>
            <span className="text-sm text-gray-600">
              {tweetText.length}/280
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormTweet;
