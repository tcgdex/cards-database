import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [860],
	set: Set,

	name: {
		'en-us': "Morgrem",
		'fr-fr': "Fourbelin",
		'es-es': "Morgrem",
		'de-de': "Pelzebub",
		'it-it': "Morgrem",
		'pt-br': "Morgrem",
		'es-mx': "Morgrem"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Impidimp",
		'fr-fr': "Grimalin",
		'es-es': "Impidimp",
		'de-de': "Bähmon",
		'it-it': "Impidimp",
		'pt-br': "Impidimp",
		'es-mx': "Impidimp"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger",
			'es-es': "Puño Ligero",
			'de-de': "Leichter Hieb",
			'it-it': "Pugnetto",
			'pt-br': "Soco de Luz",
			'es-mx': "Puño Ligero"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'es-es': "Patada Destrucción",
			'de-de': "Schmetterkick",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'es-mx': "Patada Devastadora"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Lee HyunJung",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817224,
				tcgplayer: 623499
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817224,
				tcgplayer: 623499
			}
		},
	],
}

export default card
