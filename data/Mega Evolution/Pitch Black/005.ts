import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Poltchageist",
		fr: "Poltchageist",
		es: "Poltchageist",
		'es-mx': "Poltchageist",
		de: "Mortcha"
	},

	illustrator: "Mousho",
	rarity: "Common",
	category: "Pokemon",
	dexId: [1012],
	hp: 30,
	types: ["Grass"],
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
			en: "Furitive Drop"
		},

		cost: ["Colorless"],

		effect: {
			en: "Put 1 damage counter on your opponent's Active Pokémon"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895793,
				tcgplayer: 704762
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895793,
				tcgplayer: 704762
			}
		},
	],
}

export default card
