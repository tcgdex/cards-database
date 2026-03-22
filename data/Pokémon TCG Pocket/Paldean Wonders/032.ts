import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Dondozo",
		fr: "Oyacata",
		es: "Dondozo",
		it: "Dondozo",
		de: "Heerashai",
		'pt-br': "Dondozo",
		ko: "어써러셔"
  },
  illustrator: "Souichirou Gunjima",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 130,
  types: ["Water"],
  dexId: [977],
  description: {
    en: "It treats Tatsugiri like its boss and follows it loyally. Though powerful, Dondozo is apparently not very smart.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
				en: "Giga Impact",
				fr: "Giga Impact",
				es: "Giga Impacto",
				it: "Gigaimpatto",
				pt: "Gigaimpacto",
				de: "Gigastoß"
      },
      damage: "120",
      cost: ["Water", "Water", "Water", "Colorless"],
      effect: {
        en: "During your next turn, this Pokémon can't attack.",
        fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
        es: "Durante tu próximo turno, este Pokémon no puede atacar.",
        it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
        pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
        de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 4,
};

export default card;