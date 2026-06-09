import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Forgelina",
		en: "Tinkaton",
		es: "Tinkaton",
		it: "Tinkaton",
		pt: "Tinkaton",
		de: "Granforgita"
  },
  illustrator: "KEIICHIRO ITO",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 150,
  types: ["Metal"],
  dexId: [959],
  evolveFrom: {
		en: "Tinkatuff",
		fr: "Forgella",
		es: "Tinkatuff",
		it: "Tinkatuff",
		de: "Tafforgita",
		'pt-br': "Tinkatuff",
		ko: "벼리짱"
  },
  description: {
    en: "The hammer tops 220 pounds, yet it gets swung around easily by Tinkaton as it steals whatever it pleases and carries its plunder back home.",
  },
  stage: "Stage2",
  attacks: [
    {
      name: {
        en: "Gigaton Hammer",
        fr: "Marteau Mastoc",
        es: "Martillo Colosal",
        'es-mx': "Martillo Colosal",
        de: "Gigaton-Hammer",
        it: "Martello Colossale",
        pt: "Martelo Colossal",
      },
      damage: "140",
      cost: ["Metal", "Metal", "Colorless"],
      effect: {
        en: "During your next turn, this Pokémon can't use Gigaton Hammer.",
        fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Marteau Mastoc.",
        es: "Durante tu próximo turno, este Pokémon no puede usar Martillo Colosal.",
        'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Martillo Colosal.",
        de: "Während deines nächsten Zuges kann dieses Pokémon Gigaton-Hammer nicht einsetzen.",
        it: "Durante il tuo prossimo turno, questo Pokémon non può usare Martello Colossale.",
        pt: "Durante o seu próximo turno, este Pokémon não poderá usar Martelo Colossal."
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;