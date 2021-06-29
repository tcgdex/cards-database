import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
		es: "Accelgor",
		it: "Accelgor",
		pt: "Accelgor",
		de: "Hydragil"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jet Headbutt",
				fr: "Bélier Volant",
				es: "Turbocabezazo",
				it: "Zuccata Jet",
				pt: "Cabeçada a Jato",
				de: "Flinke Kopfnuss"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0
}

export default card
