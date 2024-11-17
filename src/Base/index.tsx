"use client";
import React, { useState } from "react";
import NextNavbar from "../../@template/components/Navbar";
import NextCard from "../../@template/components/NextCard";
import NextDialog from "../../@template/components/NextDialog";
import NextConfirmDialog from "../../@template/components/NextConfirm";
import ContainerGrid from "../../@template/components/Grid";
import ContentGrid from "../../@template/components/Grid/ContentGrid";
import TextField from "../../@template/components/FormInput/TextField";

const Base = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* <NextNavbar headerText="Portfolio" /> */}
      {/* <div className="flex w-80 max-w-80 h-full justify-center items-center">
        <NextCard
          title="Stories"
          actionComponent={<p>hello</p>}
          footerComponent={<p>this is footer</p>}
          footerPosition="r"
        >
          <p>this is my nextCard</p>
        </NextCard>
      </div> */}

      {/* <button onClick={() => setOpen(true)}>open Model</button> */}

      {/* <NextDialog
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
      </NextDialog> */}

      {/* <NextConfirmDialog
        state={[open, setOpen]}
        title={"Delete User"}
        text={"are you sure want to delete this user"}
        onConfirm={() => setOpen(false)}
      /> */}

      {/* <ContainerGrid spacing={4}>
        <ContentGrid md={8} lg={8}>
          <NextCard>
            <p>asfasfs</p>
          </NextCard>
        </ContentGrid>
        <ContentGrid md={4} lg={4}>
          <NextCard>
            <p>asfasfasd</p>
          </NextCard>
        </ContentGrid>
      </ContainerGrid> */}
      <TextField name="name" type="password" placeHolder="enter name" />
    </div>
  );
};

export default Base;
