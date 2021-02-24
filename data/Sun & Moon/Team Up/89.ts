import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		442,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spirit Compressor",
				fr: "Réducteur d’Âmes",
			},
			effect: {
				en: "Search your deck for up to 4 Pokémon and discard them. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 4 Pokémon dans votre deck et défaussez-les. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spooky Shot",
				fr: "Tir Effrayant",
			},

			damage: 20,

		},
	],


	retreat: 1,



}

export default card
