import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		675,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Benevolent Boss",
				fr: "Boss Bienveillant",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon, it gets +20 HP for each of your Benched Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif, il reçoit 20 PV pour chacun de vos Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Crazy Knuckle",
				fr: "Poing Fou",
			},
			effect: {
				en: "If this Pokémon is affected by a Special Condition, this attack does 40 more damage.",
				fr: "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
