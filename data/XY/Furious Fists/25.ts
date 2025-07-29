import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Amaura",
		fr: "Amagara",
		es: "Amaura",
		it: "Amaura",
		pt: "Amaura",
		de: "Amarino"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		698,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
				es: "Estampida",
				it: "Fuggi Fuggi",
				pt: "Estouro",
				de: "Zertrampeln"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
				es: "Rayo Aurora",
				it: "Raggiaurora",
				pt: "Raio Aurora",
				de: "Aurorastrahl"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	evolveFrom: {
		en: "Sail Fossil",
		fr: "Fossile Nageoire",
		es: "Fósil Aleta",
		it: "Fossilpinna",
		pt: "Fóssil de Vela",
		de: "Flossenfossil"
	},

	thirdParty: {
		cardmarket: 281689
	}
}

export default card
