import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Simisear",
		fr: "Flamoutan",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		514,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water's Power",
				fr: "Pouvoir Submergeant",
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, the Defending Pokémon is now Asleep.",
				fr: "Si de l'Énergie Water est attachée à ce Pokémon, le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flamme",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
