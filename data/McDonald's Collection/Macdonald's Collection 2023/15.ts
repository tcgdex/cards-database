import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia",
		es: "Kirlia",
		it: "Kirlia",
		pt: "Kirlia",
		de: "Kirlia"
	},

	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [281],

	hp: 80,

	types: ["Psychic"],

	stage: "Stage1",

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
		es: "Ralts",
		it: "Ralts",
		pt: "Ralts",
		de: "Trasla"
	},

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				en: "Smack",
				fr: "Claque",
				es: "Golpazo",
				it: "Sberla",
				pt: "Tapa",
				de: "Klatscher"
			},
			damage: 20,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
				es: "Disparo Mágico",
				it: "Magicolpo",
				pt: "Tiro Mágico",
				de: "Magischer Schuss"
			},
			damage: 40,
		},
	],

	weaknesses: [
		{
			type: "Metal",
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

