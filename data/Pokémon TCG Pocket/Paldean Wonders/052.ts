import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Greavard",
		fr: "Toutombe",
		de: "Gruff",
		it: "Greavard",
		es: "Greavard",
		pt: "Greavard",
		'es-mx': "Greavard"
  },
  illustrator: "yuu",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 70,
  types: ["Psychic"],
  dexId: [971],
  description: {
    en: "This friendly Pokémon doesn't like being alone. Pay it even the slightest bit of attention, and it will follow you forever.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Soul Shot",
        fr: "Tir Spirituel",
      },
      damage: 30,
      cost: ["Psychic"],
      effect: {
        fr: "Défaussez une carte de votre main. Si vous ne le pouvez pas, cette attaque ne fait rien.",
        en: "Discard a card from your hand. If you can't, this attack does nothing.",
        es: "Descarta 1 carta de tu mano. Si no puedes, este ataque no hace nada.",
        it: "Scarta una delle carte che hai in mano. Se non puoi, questo attacco non ha effetto.",
        pt: "Descarte uma carta da sua mão. Se não puder fazer isto, este ataque não fará nada.",
        de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machen kannst, hat diese Attacke keine Auswirkungen."
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