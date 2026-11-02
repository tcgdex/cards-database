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
	cameoDexIds: [742],

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
		de: "Alola-Kleinstein"
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

	description: {
		en: "When two Graveler fight each other, it fills the surroundings with flashes of light and sound. People call it the \"fireworks of the earth.\"",
		de: "Streiten sie sich untereinander, erzeugen sie ein lautes Knallen und grelles Leuchten, das von Einheimischen „Felsenfeuerwerk“ genannt wird."
	},

	thirdParty: {
		cardmarket: 368967,
		tcgplayer: 183809
	}
}

export default card
