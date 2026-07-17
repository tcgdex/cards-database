import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Sinistcha",
		fr: "Théffroyable",
		es: "Sinistcha",
		'es-mx': "Sinistcha",
		de: "Fatalitcha"
	},

	illustrator: "mingo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1013],
	hp: 60,
	types: ["Grass"],

	evolveFrom: {
		en: "Poltchageist"
	},

	stage: "Stage1",

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
			en: "Matcha Spin"
		},

		cost: ["Colorless"],

		effect: {
			en: "If you have 6 or more Pokémon with the Hide 'n' Sneak Ability in your discard pile, put 4 damage counters on each of your opponent's Pokémon."
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
				cardmarket: 895794,
				tcgplayer: 704763
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895794,
				tcgplayer: 704763
			}
		},
	],
}

export default card
