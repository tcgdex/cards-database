import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	illustrator: "Narumi Sato",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [58],

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

