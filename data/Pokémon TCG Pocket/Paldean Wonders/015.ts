import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Wo-Chien",
		fr: "Chongjian",
		es: "Wo-Chien",
		it: "Wo-Chien",
		pt: "Wo-Chien",
		de: "Chongjian"
  },
  illustrator: "Kouki Saitou",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Grass"],
  dexId: [1001],
  description: {
    en: "It drains the life-force from vegetation, causing nearby forests to instantly wither and fields to turn barren.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Binding Greed",
        fr: "Avidité Contraignante",
        es: "Avaricia Vinculante",
        it: "Vincolo Avido",
        pt: "Gula Aprisionante",
        de: "Fesselnde Gier"
      },
      damage: "90",
      cost: ["Grass", "Grass", "Grass", "Colorless"],
      effect: {
        en: "During your opponent's next turn, attacks used by the Defending Pokémon cost {C}{C} more.",
        fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent {C}{C} de plus.",
        es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor cuestan {C}{C} más.",
        it: "Durante il prossimo turno del tuo avversario, il costo degli attacchi usati dal Pokémon difensore aumenta di {C}{C}.",
        pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão {C}{C} a mais.",
        de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der vom Verteidigenden Pokémon eingesetzten Attacken um {C}{C}."
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;