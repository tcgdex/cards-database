import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Rowlet",
		fr: "Brindibou",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		722,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Skill Dive",
				fr: "Plongeon Contrôlé",
			},
			effect: {
				en: "This attack does 10 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
