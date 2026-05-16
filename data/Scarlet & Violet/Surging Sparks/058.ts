import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		en: "Magnemite",
		fr: "Magnéti",
		es: "Magnemite",
		it: "Magnemite",
		pt: "Magnemite",
		de: "Magnetilo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
			es: "Bola Relámpago",
			it: "Fulminpalla",
			pt: "Bola de Raios",
			de: "Kugelblitz"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794332,
				tcgplayer: 589992
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794332,
				tcgplayer: 589992
			}
		},
	],

	illustrator: "Hoshino KURO",
	
}

export default card
