import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Girafarig",
		fr: "Girafarig"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psypower",
				fr: "Puissance Psy"
			},
			effect: {
				en: "Put 2 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Placez 2 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Commanding Tail",
				fr: "Queue Imposante"
			},
			effect: {
				en: "You may have your opponent shuffle their hand into their deck. If you do, your opponent draws 4 cards.",
				fr: "Vous pouvez demander à votre adversaire de mélanger sa main avec son deck. Dans ce cas, votre adversaire pioche 4 cartes."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
