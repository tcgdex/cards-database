import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Fuecoco",
		fr: "Chochodile",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [909],

	hp: 70,

	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
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
			cost: ["Fire", "Colorless"],
			name: {
				en: "Flare",
				fr: "Flamboiement",
				es: "Llamarada",
				it: "Vampata",
				pt: "Labareda",
				de: "Auflodern"
			},
			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Water",
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

