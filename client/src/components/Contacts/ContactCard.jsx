import React, { useRef, useState } from "react";
import defaultAvatar from "../../assets/defaultAvatar.svg";

export default function ContactCard({
  Contact: contact,
  handleEdit,
  handleDelete,
}) {
  let date = new Date(contact.dates.birthday);
  date = `
    ${date.getDate().toString().padStart(2, "0")}.${date
    .getMonth()
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;

  return (
    <div name="ContactCard" className="ContactCard">
      <DefaultAvatar Contact={contact} />
      <h3 className="cName">
        {contact.firstName} {contact.lastName}
      </h3>
      <span className="cData">{contact.email}</span>
      <span className="vSpace">&nbsp;</span>
      <span className="cBirthday">{date}</span>
      <span className="cData">
        {contact.zipcode} {contact.city}
      </span>
      <span className="cData">{contact.street}</span>
      <span className="vSpace">&nbsp;</span>
      <span>
        <button className="editBtn" onClick={() => handleEdit(contact)}>
          Edit
        </button>
        <button className="deleteBtn" onClick={() => handleDelete(contact)}>
          Delete
        </button>
      </span>
    </div>
  );
}

function DefaultAvatar({ Contact }) {
  return (
    <div name="DefaultAvatar" className="DefaultAvatar">
      <span className="initialen">
        {Contact.firstName[0]}
        {Contact.lastName[0]}
      </span>
      <img src={defaultAvatar} alt="" />
    </div>
  );
}
