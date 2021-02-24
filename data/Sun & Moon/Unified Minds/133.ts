import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Mirror Gem",
				fr: "Gemme Miroir",
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même s’il est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
			},
			damage: 10,

		},
	],


	retreat: 1,



}

export default card
