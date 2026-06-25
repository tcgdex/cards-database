import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Malvalame",
		en: "Ceruledge",
		es: "Ceruledge",
		it: "Ceruledge",
		pt: "Ceruledge",
		de: "Azugladis"
  },
  illustrator: "Ryota Murayama",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 110,
  types: ["Psychic"],
  dexId: [937],
  evolveFrom: {
		fr: "Charbambin",
		en: "Charcadet",
		es: "Charcadet",
		it: "Charcadet",
		pt: "Charcadet",
		de: "Knarbon"
  },
  description: {
    en: "An old set of armor steeped in grudges caused this Pokémon's evolution. Ceruledge cuts its enemies to pieces without mercy.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        fr: "Épée Combattante",
        en: "Fighting Sword",
        es: "Espada Combativa",
        it: "Spada Combattente",
        pt: "Espada de Combate",
        de: "Kampfschwert"
      },
      damage: "70+",
      cost: ["Psychic", "Psychic", "Colorless"],
      effect: {
        en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 70 more damage.",
        fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-{ex}, cette attaque inflige 70 dégâts supplémentaires.",
        es: "Si el Pokémon Activo de tu rival es un Pokémon {ex}, este ataque hace 70 puntos de daño más.",
        it: "Se il Pokémon attivo del tuo avversario è un Pokémon-{ex}, questo attacco infligge 70 danni in più.",
        de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-{ex} ist, fügt diese Attacke 70 Schadenspunkte mehr zu.",
        'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {ex}, este ataque causará 70 pontos de dano a mais.",
        ko: "상대의 배틀 포켓몬이 「포켓몬 {ex}」라면 70데미지를 추가한다."
      },
    },
  ],
  weaknesses: [
    {
      type: "Darkness",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;