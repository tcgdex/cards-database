import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Buizel",
		fr: "Mustébouée",
		es: "Buizel",
		it: "Buizel",
		pt: "Buizel",
		de: "Bamelin"
	},
	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		418,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Razor Fin",
				fr: "Aileron-Rasoir",
				es: "Aleta Afilada",
				it: "Pinnalama",
				pt: "Barbatana Cortante",
				de: "Rasierflosse"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revólver d’Água",
				de: "Aquaknarre"
			},

			damage: 40,

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
