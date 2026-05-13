import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [513],
	set: Set,

	name: {
		en: "Pansear",
		fr: "Flamajou",
		es: "Pansear",
		it: "Pansear",
		pt: "Pansear",
		de: "Grillmak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			de: "Glühen"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794277,
				tcgplayer: 590020
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794277,
				tcgplayer: 590020
			}
		},
	],

	illustrator: "Wintr Wandr",
	
}

export default card
