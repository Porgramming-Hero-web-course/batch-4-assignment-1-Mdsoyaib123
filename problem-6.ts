{
  // Problem-6
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


