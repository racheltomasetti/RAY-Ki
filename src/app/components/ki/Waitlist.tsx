export default function Waitlist() {
  return (
    <div className="bg-[var(--bg-2)] rounded-lg p-6 md:p-8 shadow-md space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-[var(--accent)]">
          Join the Ki Waitlist
        </h3>
        <p className="text-lg text-[var(--tx-2)] italic">
          Be the first to know when Ki launches and get exclusive early access.
        </p>
      </div>

      <div className="w-full">
        <iframe
          className="airtable-embed w-full rounded-md"
          src="https://airtable.com/embed/appP7qyOU8Keu1C8z/pag2JE5f5g5fBaXX4/form"
          frameBorder="0"
          width="100%"
          height="533"
          style={{
            background: "transparent",
            border: "1px solid var(--ui-2)",
          }}
        />
      </div>
    </div>
  );
}
