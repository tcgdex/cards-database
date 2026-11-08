import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Dondozo",
		'fr-fr': "Oyacata",
		'es-es': "Dondozo",
		'it-it': "Dondozo",
		'de-de': "Heerashai",
		'pt-br': "Dondozo",
		'ko-kr': "어써러셔"
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
				'en-us': "Giga Impact",
				'fr-fr': "Giga Impact",
				'es-es': "Giga Impacto",
				'it-it': "Gigaimpatto",
				'pt-br': "Gigaimpacto",
				'de-de': "Gigastoß"
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