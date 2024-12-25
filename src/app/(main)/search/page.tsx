import TrendsSidebar from "@/components/TrendsSidebar";
import { Metadata } from "next";
import SearchResults from "./SearchResults";

interface PageProps {
  searchParams: { q: string };
}

export function generateMetadata({ searchParams: { q } }: PageProps): Metadata {
  return {
    title: `"${q}"-д тохирох хайлтын үр дүн олдсонгүй.`,
  };
}

export default function Page({ searchParams: { q } }: PageProps) {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <div className="rounded-2xl bg-card p-3 xs:p-5 shadow-sm">
          <h1 className="line-clamp-2 break-all text-center xs:text-xl font-bold">
            &quot;{q}&quot;-д тохирох хайлтын үр дүн олдсонгүй.
          </h1>
        </div>
        <SearchResults query={q} />
      </div>
      <TrendsSidebar />
    </main>
  );
}
