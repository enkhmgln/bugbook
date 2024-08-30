import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-gradient-to-r">
          404 Not Found
        </div>
        <h1 className="mt-4 text-6xl font-bold tracking-tighter text-foreground sm:text-7xl">
          Oops!
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for could not be found. It may have been
          moved or deleted.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
