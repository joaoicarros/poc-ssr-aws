/* eslint-disable @next/next/no-img-element */
// import { GetStaticProps } from 'next';
// import { Button, Link } from '@monorepo/ui-components';

interface UserProps {
  user: User;
}

interface User {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
}

import { GetServerSideProps } from "next";
// import { useState, useEffect } from "react";
export function Index({ user }: UserProps) {
  // const [user, setUser] = useState<User>();

  // async function getUserGithub() {
  //   const response = await fetch("https://api.github.com/users/joaopavila");
  //   const data = await response.json();
  //   setUser(data);
  // }

  // useEffect(() => {
  //   getUserGithub();
  // }, [setUser]);

  return user ? (
    <div>
      <img
        src={user.avatar_url}
        alt={user.name}
        width="80"
        style={{ borderRadius: 40 }}
      />
      <h1>Login: {user.login}</h1>
      <p>Bio: {user.bio}</p>
      <p>Name: {user.name}</p>
    </div>
  ) : null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.github.com/users/joaopavila");
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
};

export default Index;
