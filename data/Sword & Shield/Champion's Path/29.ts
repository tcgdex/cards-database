import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [744],

	name: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff",
		de: "Wuffels"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fighting",
	],

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
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "When it rubs the rocks on its neck against you, that's proof of its love for you. However, the rocks are sharp, so the gesture is quite painful!"
	},

	thirdParty: {
		cardmarket: 500000,
		tcgplayer: 223021
	}
}

export default card
