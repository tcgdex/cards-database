import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Doublade",
		fr: "Dimoclès",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		680,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Curse of the Blade",
				fr: "Lame Sortilège",
			},
			effect: {
				en: "Put 3 damage counters on each of your opponent's Pokémon that has a Pokémon Tool card attached to it.",
				fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire auquel une carte Outil Pokémon est attachée.",
			},

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
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
