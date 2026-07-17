import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Within dense forests, this Pokémon lives in a pack with others of its kind. It's incredibly aggressive, and the other Pokémon of the forest fear it."
	},

	name: {
		en: "Zarude",
		fr: "Zarude",
		es: "Zarude",
		'es-mx': "Zarude",
		de: "Zarude"
	},

	illustrator: "matazo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [893],
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Overhead Throw"
		},

		cost: ["Darkness"],

		damage: 30,

		effect: {
			en: "This attack also does 30 damage to 1 of your Benched Pokémon."
		}
	}, {
		name: {
			en: "Shadowy Whip"
		},

		cost: ["Darkness", "Darkness", "Darkness"],

		damage: "100+",

		effect: {
			en: "If any of your Benched Pokémon has any \"Shadow Darkness Energy\" attached to it, this attack does 70 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895841,
				tcgplayer: 704813
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895841,
				tcgplayer: 704813
			}
		},
	],
}

export default card
