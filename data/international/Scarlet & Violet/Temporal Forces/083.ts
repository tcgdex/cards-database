import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [308],
	set: Set,

	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'es-es': "Medicham",
		'it-it': "Medicham",
		'pt-br': "Medicham",
		'de-de': "Meditalis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Low Sweep",
			'fr-fr': "Balayette",
			'es-es': "Puntapié",
			'it-it': "Calciobasso",
			'pt-br': "Movimento Baixo",
			'de-de': "Fußtritt"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "High Jump Kick",
			'fr-fr': "Pied Voltige",
			'es-es': "Patada Salto Alta",
			'it-it': "Calcinvolo",
			'pt-br': "Chute de Pulo Alto",
			'de-de': "Turmkick"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It elegantly avoids attacks with dance-like steps, then launches a devastating blow in the same motion.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760713,
				tcgplayer: 542827
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760713,
				tcgplayer: 542827
			}
		},
	],

	illustrator: "Masako Tomii",

}

export default card