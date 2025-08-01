import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
		es: "Graveler de Alola",
		it: "Graveler di Alola",
		pt: "Graveler de Alola",
		de: "Alola-Georok"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Rollout",
				fr: "Roulade",
				es: "Desenrollar",
				it: "Rotolamento",
				pt: "Rolagem",
				de: "Walzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electroslug",
				fr: "Électro Frappe",
				es: "Electropuñetazo",
				it: "Elettropugno",
				pt: "Lesma Elétrica",
				de: "Elektroschuss"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 368967
	}
}

export default card
