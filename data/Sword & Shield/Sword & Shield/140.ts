import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Roulé-Boulé",
				es: "Placaje Giro",
				it: "Rollazione",
				pt: "Golpe de Colisão Rolante",
				de: "Rolltackle"
			},

			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros Impact",
				es: "Impacto Pesado",
				it: "Impatto Pesante",
				pt: "Impacto Pesado",
				de: "Schwerer Einschlag"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
