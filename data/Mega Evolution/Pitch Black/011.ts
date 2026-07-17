import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Its firepower increases when it fights, reaching over 1,800 degrees Fahrenheit. It likes berries that are rich in fat.",
		de: "Im Kampf erreichen seine Flammen Temperaturen von bis zu 1000 ℃. Es hat eine Vorliebe für Beeren mit hohem Fettgehalt."
	},

	name: {
		en: "Charcadet",
		fr: "Charbambin",
		es: "Charcadet",
		'es-mx': "Charcadet",
		de: "Knarbon"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	dexId: [935],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Best Punch",
			de: "Bester Schlag"
		},

		cost: ["Fire"],

		damage: 40,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895799,
				tcgplayer: 704768
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895799,
				tcgplayer: 704768
			}
		},
	],
}

export default card
