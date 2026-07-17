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

	illustrator: "Jiro Sasuno",
	rarity: "Illustration rare",
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
			type: "holo",
			thirdParty: {
				cardmarket: 895869,
				tcgplayer: 704842
			}
		},
	],
}

export default card
