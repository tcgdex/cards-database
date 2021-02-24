import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		463,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Licks Go Crazy",
				fr: "Langue Acérée",
			},
			effect: {
				en: "Discard a random card from your opponent's hand, discard the top card of your opponent's deck, and discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire, défaussez la carte du dessus du deck de votre adversaire, et défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
