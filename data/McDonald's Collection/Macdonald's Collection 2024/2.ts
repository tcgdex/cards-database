import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 60,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				es: "Bola Voltio",
				it: "Energisfera",
				pt: "Bola Elétrica",
				de: "Elektroball"
			},
			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

