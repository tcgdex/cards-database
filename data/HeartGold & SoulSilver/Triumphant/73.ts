import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
		de: "Porygon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharpen",
				fr: "Affûtage",
				de: "Schärfer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Recover",
				fr: "Soin",
				de: "Genesung"
			},
			effect: {
				en: "Discard an Energy attached to Porygon and remove 4 damage counters from Porygon.",
				fr: "Défaussez une carte Énergie attachée à Porygon et retirez-lui 4 marqueurs de dégât.",
				de: "Lege 1 an Porygon angelegten Energie auf deinen Ablagestapel und entferne 4 Schadensmarken von Porygon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "A manmade Pokémon that came about as a result of research. It is programmed with only basic motions."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279537,
		tcgplayer: 88312
	}
}

export default card
