import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Sandshrew",
		fr: "Sabelette",
		es: "Sandshrew",
		it: "Sandshrew",
		pt: "Sandshrew",
		de: "Sandan"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		27,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collecte",
				es: "Coleccionar",
				it: "Tassa",
				pt: "Coleta",
				de: "Sammeln"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				es: "Roba 1 carta.",
				it: "Pesca una carta.",
				pt: "Compre 1 carta.",
				de: "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Fighting",
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

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372374
	}
}

export default card
