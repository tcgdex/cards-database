import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	illustrator: "0313",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [133],

	hp: 60,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
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

