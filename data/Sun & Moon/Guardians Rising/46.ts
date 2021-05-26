import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Oricorio",
		fr: "Plumeline",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		741,
	],
	hp: 90,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Feather Dance",
				fr: "Danse-Plume",
			},
			effect: {
				en: "During your next turn, this Pokémon's Pom-Pom Punch attack's base damage is 100.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Poing Pom-Pom de ce Pokémon sont de 100.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Pom-Pom Punch",
				fr: "Poing Pom-Pom",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
