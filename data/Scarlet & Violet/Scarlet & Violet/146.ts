import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [335],
	set: Set,

	name: {
		en: "Zangoose",
		fr: "Mangriff",
		es: "Zangoose",
		it: "Zangoose",
		pt: "Zangoose",
		de: "Sengo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			de: "Schlitzer"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
    {
      type: "normal",
      size: "standard"
    },
    {
      type: "reverse",
      size: "standard"
    }
  ],

	illustrator: "Yuya Oka",

	description: {
		en: "The eggs it lays are filled with happiness. Eating even one bite will bring a smile to anyone.",
	},

	thirdParty: {
        cardmarket: 702442,
        tcgplayer: 488035
    }
}

export default card