"use client";
import React, { useState } from "react";
import NextNavbar from "../../@template/components/Navbar";
import NextCard from "../../@template/components/NextCard";
import NextDialog from "../../@template/components/NextDialog";

const Base = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NextNavbar />
      <div className="flex w-80 max-w-80 h-full justify-center items-center">
        <NextCard
          title="Stories"
          actionComponent={<p>hello</p>}
          footerComponent={<p>this is footer</p>}
          footerPosition="r"
        >
          <p>this is my nextCard</p>
        </NextCard>
      </div>

      <button onClick={() => setOpen(true)}>open Model</button>

      <NextDialog
        open={open}
        onClose={() => setOpen(false)}
        fullHeight={false}
        title="Course Details"
        actionTitle="Submit"
        closeIcon={true}
      >
        <div>
          <h1>dialog box</h1>
        </div>
      </NextDialog>
    </>
  );
};

export default Base;
