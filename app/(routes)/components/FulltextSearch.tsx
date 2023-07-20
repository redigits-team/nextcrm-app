"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FulltextSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    router.push(`/fulltext-search/${search}`);
    setSearch("");
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder={"Search"}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" className="gap-2" onClick={handleSearch}>
        <span className="hidden md:flex">Search</span>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default FulltextSearch;
