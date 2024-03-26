"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  FileCheck,
  Check,
  ChevronsUpDown,
  Phone,
  Home,
  Upload,
  Calendar as CalendarIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputWithIcon } from "@/components/atoms/InputWithIcon";
import { InputWithButton } from "@/components/atoms/InputWithButton";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function TestComponents({ className }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [progress, setProgress] = useState(13);

  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: new Date(2022, 0, 20), // Mengatur `to` sebagai objek Date
  });

  // Fungsi untuk menambah 20 hari ke `from` dan mengubah `to` menjadi `Date`
  const handleSetDate = (selectedDate) => {
    setDate({
      from: selectedDate.from,
      to: addDays(selectedDate.from, 20), // Menambah 20 hari dari `from`
    });
  };

  if (!frameworks) {
    return <div>Error: Frameworks are not defined correctly!</div>;
  }

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="m-10 mb-2 ">
        {/* Button */}
        <Button
          size="sm"
          variant="primary"
          className=" flex justify-center items-center gap-2 p-4 mb-2"
        >
          <FileCheck />
          Req Review
        </Button>
        <Button
          size="sm"
          variant="gray"
          className=" flex justify-center items-center gap-2 p-4 mb-2"
        >
          <ArrowLeft />
          Back
        </Button>
        <Button
          size="sm"
          variant="primary"
          className=" flex justify-center items-center gap-2 p-4 mb-2"
        >
          <ArrowRight />
          Next
        </Button>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input placeholder="Tes" />
          <h1>Input with icon</h1>
          <InputWithIcon
            className="h-[36px] w-[155px]"
            placeholder="089819291 "
            icon={<Phone width={20} height={20} />}
          />
          <InputWithButton placeholder="Insert Tariffing" button="IDR" />
          <Label className="text-[#020617] font-bold">
            Solutions <span className="text-[#991B1B] font-bold">*</span>
          </Label>
          <Input id="picture" type="file" />
        </div>

        {/* Breadcumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="flex justify-center items-center">
              <Home width={12} height={12} />
              <BreadcrumbLink className="text-xs" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xs" href="/docs/components">
                add project
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xs">IP</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Progress Bar */}
        <Progress value={progress} className="w-[40%]" />

        <Badge className="py-[2px] px-2 text-[#15803D] bg-[#F0FDF4] border-[#22C55E]">
          Complete
        </Badge>
        <Badge className="py-[2px] px-2 text-[#1C244D] bg-[#F2FBFC] border-[#1C244D]">
          In Progress
        </Badge>

        {/* Datetime */}
        <div className={cn("grid gap-2", className)}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-[300px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={handleSetDate} // Menggunakan fungsi handleSetDate
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
        {/* End Datetime */}

        {/* Combobox */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? frameworks?.find((framework) => framework.value === value)
                    ?.label
                : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks?.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        {/* End Combobox */}
      </div>
    </div>
  );
}
