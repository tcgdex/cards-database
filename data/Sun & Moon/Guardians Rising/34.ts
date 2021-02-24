import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Vanillish",
		fr: "Sorboul",
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		583,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Vanillite",
		fr: "Sorbébé",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ice Shard",
				fr: "Éclats Glace",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Fighting Pokémon, this attack does 30 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
