import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Morpeko ex",
		fr: "Morpeko-ex",
		es: "Morpeko ex",
		'es-mx': "Morpeko ex",
		de: "Morpeko-ex"
	},

	illustrator: "NC Empire",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [877],
	hp: 180,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Wheel Draw"
		},

		cost: ["Darkness"],

		effect: {
			en: "Shuffle your hand into your deck, then draw 6 cards."
		}
	}, {
		name: {
			en: "Hangry Blaster"
		},

		cost: ["Darkness", "Darkness"],

		damage: "40+",

		effect: {
			en: "This attack does 40 more damage for each damage counter on this Pokémon"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895902,
				tcgplayer: 704874
			}
		},
	],
}

export default card
