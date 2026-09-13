import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="py-4 flex items-center justify-between">
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
      <Avatar>
        {/* <AvatarImage src="" alt="@shadcn" className="grayscale" /> */}
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
