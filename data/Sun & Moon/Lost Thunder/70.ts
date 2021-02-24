import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Bruxish",
		fr: "Denticrisse",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		779,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Mind Bend",
				fr: "Contrôleur d’Esprit",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Follow the Wound",
				fr: "Bonjour les Dégâts",
			},
			effect: {
				en: "This attack does 60 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
