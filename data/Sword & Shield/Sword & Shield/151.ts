import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Corvisquire",
		fr: "Bleuseille",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rookidee",
		fr: "Minisange",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pluck",
				fr: "Picore",
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
				fr: "Avant d’infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Peck",
				fr: "Bec Vrille",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
