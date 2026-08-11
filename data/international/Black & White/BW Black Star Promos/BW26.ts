import { Card } from '../../../interfaces'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		en: "Axew",
		fr: "Coupenotte",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		610,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Bite",
				fr: "Grosse Morsure",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
	],


	retreat: 1,




	description: {
		en: "They mark their territory by leaving gashes in trees with their tusks. If a tusk breaks, a new one grows in quickly.",
	},
}

export default card
