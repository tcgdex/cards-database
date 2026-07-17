import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Fomantis",
		fr: "Mimantis",
		es: "Fomantis",
		'es-mx': "Fomantis",
		de: "Imantis"
	},

	illustrator: "nisimono",
	rarity: "Common",
	category: "Pokemon",
	dexId: [753],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Reckless Charge"
		},

		cost: ["Grass"],

		damage: 30,

		effect: {
			en: "This Pokémon also does 10 damage to itself"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895791,
				tcgplayer: 704760
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895791,
				tcgplayer: 704760
			}
		},
	],
}

export default card
