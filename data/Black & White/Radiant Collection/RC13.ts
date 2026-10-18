import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Jirachi",
		es: "Jirachi",
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Wish",
				es: "Deseo",
			},
			effect: {
				en: "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				es: "Busca en tu baraja 1 carta y ponla en tu mano. Baraja las cartas de tu baraja después.",
			},
		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heart Sign",
				es: "Señal Corazón",
			},

			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The twinkle of the stars. The destiny of love. A miracle that grants wishes in the night sky.",
		es: "El brillo de las estrellas... El destino del amor... Un milagro que concede deseos en el cielo de la noche.",
	},

	thirdParty: {
		tcgplayer: 113755
	}
}

export default card
