import { Container } from "@/components/Container";
import { TarifsCard } from "@/components/TarifsCard";

export default function Tarifs() {
  return (
    <Container className="space-y-15 py-20">
      <h2 className="text-4xl lg:text-5xl font-bold">Tarifs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <TarifsCard
          badge="Basic"
          price={15}
          description="Pour les débutants"
          list={[
            "1 utilisateur",
            "10 utilisateurs",
            "50 utilisateurs",
            "100 utilisateurs",
            "300 utilisateurs",
          ]}
        />
        <TarifsCard
          badge="Basic"
          price={25}
          description="Pour les débutants"
          list={[
            "1 utilisateur",
            "10 utilisateurs",
            "50 utilisateurs",
            "100 utilisateurs",
            "300 utilisateurs",
          ]}
          isColored={true}
        />
        <TarifsCard
          badge="Basic"
          price={30}
          description="Pour les débutants"
          list={[
            "1 utilisateur",
            "10 utilisateurs",
            "50 utilisateurs",
            "100 utilisateurs",
            "300 utilisateurs",
          ]}
        />
      </div>
    </Container>
  );
}
