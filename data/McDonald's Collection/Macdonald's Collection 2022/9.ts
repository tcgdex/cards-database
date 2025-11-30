import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		it: "Flaaffy",
		pt: "Flaaffy",
		de: "Waaty"
	},

	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [180],

	hp: 90,

	types: ["Lightning"],

	stage: "Stage1",

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
		es: "Mareep",
		it: "Mareep",
		pt: "Mareep",
		de: "Voltilamm"
	},

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				en: "Static Shock",
				fr: "Choc Statique",
				es: "Electrochoque",
				it: "Elettroshock",
				pt: "Choque Estático",
				de: "Statischer Schock"
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				es: "Bola Voltio",
				it: "Energisfera",
				pt: "Bola Elétrica",
				de: "Elektroball"
			},
			damage: 60,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

