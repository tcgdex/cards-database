import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Gabite",
		fr: "Carmache",
		es: "Gabite",
		it: "Gabite",
		pt: "Gabite",
		de: "Knarksel"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		444,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Corkscrew Punch",
				fr: "Poing Tire-Bouchon",
				es: "Puño Tirabuzón",
				it: "Pugno Rotante",
				pt: "Soco Saca-rolha",
				de: "Korkenzieherhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sharp Scythe",
				fr: "Faucille Acérée",
				es: "Guadaña Afilada",
				it: "Falcetagliente",
				pt: "Foice Afiada",
				de: "Scharfe Sense"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 388367
	}
}

export default card
