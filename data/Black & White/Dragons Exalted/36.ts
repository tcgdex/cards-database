import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Seismitoad",
		fr: "Crapustule",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		537,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Echoed Voice",
				fr: "Écho",
			},
			effect: {
				en: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drain Punch",
				fr: "Vampipoing",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
