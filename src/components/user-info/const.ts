export const INPUT_FIELDS = [
  {
    id: "name",
    label: "Name",
    type: "text",
    required: true,
  },
  {
    id: "username",
    label: "User name",
    type: "text",
    required: true,
  },
  {
    id: "email",
    label: "E-mail",
    type: "email",
    required: true,
  },
  {
    id: "street",
    label: "Street",
    type: "text",
    required: true,
  },
  {
    id: "city",
    label: "City",
    type: "text",
    required: true,
  },
  {
    id: "zipCode",
    label: "Zip code",
    type: "text",
    required: true,
  },
  {
    id: "website",
    label: "Website",
    type: "text",
    required: true,
  },
] as const;

export type FormFields = typeof INPUT_FIELDS[number]["id"];
