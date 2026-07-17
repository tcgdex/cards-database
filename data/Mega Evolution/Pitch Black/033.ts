import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		'es-mx': "Shuppet",
		de: "Shuppet"
	},

	illustrator: "Bun Toujo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [353],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hide 'n' Sneak"
		},

		effect: {
			en: "Prevent all effects of opponent's Attacks and Abilities done to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hang Down"
		},

		cost: ["Psychic", "Psychic"],

		damage: 10
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895820,
				tcgplayer: 704790
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895820,
				tcgplayer: 704790
			}
		},
	],
}

export default card
