import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [974],
	set: Set,

	name: {
		en: "Cetoddle",
		fr: "Piétacé",
		es: "Cetoddle",
		it: "Cetoddle",
		pt: "Cetoddle",
		de: "Flaniwal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
    {
      type: "reverse",
      size: "standard"
    },
    {
      type: "normal",
      size: "standard"
    }
  ],

	illustrator: "Shin Nagasawa",

	description: {
		en: "It lives in frigid regions in pods of five or so individuals. It loves the minerals found in snow and ice.",
	},

	thirdParty: {
        cardmarket: 702353,
        tcgplayer: 487908
    }
}

export default card