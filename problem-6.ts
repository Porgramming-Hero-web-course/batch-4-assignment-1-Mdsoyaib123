{
  // Problem-6

  //   the Partial type is a utility type that constructs a type where all properties of a given type are optional.It's takes a type T and makes all of its properties optional.

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (obj: Profile, updatesProfile: Partial<Profile>) => {
    const newUpdateProfile = { ...obj, ...updatesProfile };
    return newUpdateProfile;
  };

  const res = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(res, { age: 29, name: "sourav" }));
}
