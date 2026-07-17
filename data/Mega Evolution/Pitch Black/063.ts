import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		'es-mx': "Bronzor",
		de: "Bronzel"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	dexId: [436],
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Mirror Attack"
		},

		cost: ["Metal"],

		damage: "10+",

		effect: {
			en: "If your opponent's Active Pokémon is a Metal Pokémon, this attack does 30 more damage"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895848,
				tcgplayer: 704820
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895848,
				tcgplayer: 704820
			}
		},
	],
}

export default card
