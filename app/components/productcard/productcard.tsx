import { IoDocumentTextSharp } from "react-icons/io5";
import Link from "next/link";
//import cart components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
//import icons
import { FaDownload } from "react-icons/fa6";
import { Url } from "next/dist/shared/lib/router/router";
import { IoLogoWhatsapp } from "react-icons/io5";

export function ProductCard(program: Program) {
  const downloadUrl: Url = program.downloadUrl as string;
  const whatsappLink: Url = process.env.NEXT_PUBLIC_WHATSAPP_LINK as string;
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">{program.title}</CardTitle>
        <CardDescription>{program.category}</CardDescription>
      </CardHeader>
      <CardContent className="mt-5">
        <p>{program.description}</p>
      </CardContent>
      <CardFooter className="">
        <div className="flex items-center gap-4">
          <Button
            variant={"outline"}
            className="rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            <Link href={downloadUrl} className="flex gap-2 ">
              <FaDownload />
              <span>Download</span>
            </Link>
          </Button>

          <Dialog>
            <DialogTrigger className="rounded-full flex items-center justify-center hover:text-blue-500 transition">
              <IoDocumentTextSharp className="text-xl" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-5">{program.title}</DialogTitle>
                <DialogDescription className="">
                  <p className="mb-2">
                    Product Number:{" "}
                    <span className="text-black">{program.productNumber}</span>{" "}
                  </p>
                  <p className="mb-2">
                    License Number:{" "}
                    <span className="text-black">{program.licenseNumber}</span>
                  </p>
                  <p className="">
                    Validation Code:{" "}
                    <span className="text-black">{program.validationCode}</span>
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Link href={whatsappLink}>
            <IoLogoWhatsapp className="transition text-gray-800 hover:text-green-500 text-xl" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
