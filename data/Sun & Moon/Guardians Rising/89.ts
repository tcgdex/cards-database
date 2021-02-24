import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		36,
	],
	hp: 100,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lullaby",
				fr: "Comptine",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Meteor Mash",
				fr: "Poing Météore",
			},
			effect: {
				en: "During your next turn, this Pokémon's Meteor Mash attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Poing Météore de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
