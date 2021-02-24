import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Snover",
		fr: "Blizzi",
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		459,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Ice Shard",
				fr: "Éclats Glace",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Fighting Pokémon, this attack does 40 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
