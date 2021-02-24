import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		621,
	],
	hp: 110,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rough Skin",
				fr: "Peau Dure",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
