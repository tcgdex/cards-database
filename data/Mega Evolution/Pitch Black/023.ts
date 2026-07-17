import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "It stores static electricity in its fur for discharging. This Pokémon's whole body gives off sparks if a storm approaches."
	},

	name: {
		en: "Electrike",
		fr: "Dynavolt",
		es: "Electrike",
		'es-mx': "Electrike",
		de: "Frizelbliz"
	},

	illustrator: "Dsuke",
	rarity: "Common",
	category: "Pokemon",
	dexId: [309],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Collect"
		},

		cost: ["Lightning"],

		effect: {
			en: "Draw a card"
		}
	}, {
		name: {
			en: "Tackle"
		},

		cost: ["Lightning", "Lightning"],

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895811,
				tcgplayer: 704780
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895811,
				tcgplayer: 704780
			}
		},
	],
}

export default card
