export default function capitalize(string) {
    return string?.length > 0
      ? string
          ?.trim()
          ?.split(" ")
          ?.map((word) => word[0]?.toUpperCase() + word?.slice(1))
          ?.join(" ")
      : "";
  }
  