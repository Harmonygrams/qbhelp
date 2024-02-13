import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { ProductCard } from "./components/productcard/productcard";
import { SkeletonLoader } from "./components/skeletonLoader/skeletonLoader";
export const revalidate = 5;
const query = gql`
  query ProgramsQuery {
    programs(query: { title: "" }) {
      title
      category
      description
      productNumber
      licenseNumber
      validationCode
      downloadUrl
    }
  }
`;
export default async function Home() {
  const { data, loading } = await getClient().query({
    query,
    fetchPolicy: "no-cache",
  });
  const getData: Promise<[Program]> = data.programs;
  const programs = await getData;
  return (
    <main className="w-[90%] mx-auto">
      <h1 className="my-10 text-2xl font-semibold text-gray-800">
        Featured software
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 transition">
        {programs.map((program, i) => (
          <ProductCard {...program} key={i} />
        ))}
      </div>
      {loading && <SkeletonLoader />}
    </main>
  );
}
