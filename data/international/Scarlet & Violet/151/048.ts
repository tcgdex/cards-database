import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [48],
	set: Set,

	name: {
		'fr-fr': "Mimitoss",
		'en-us': "Venonat",
		'es-es': "Venonat",
		'it-it': "Venonat",
		'pt-br': "Venonat",
		'de-de': "Bluzuk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Ronge",
			'en-us': "Gnaw",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Rayon",
			'en-us': "Beam",
			'es-es': "Transmisión",
			'it-it': "Raggio",
			'pt-br': "Feixe",
			'de-de': "Strahl"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Poison oozes from all over its body. It catches small bug Pokémon at night that are attracted by light.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733643,
				tcgplayer: 516206,
				cardtrader: 261155
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733643,
				tcgplayer: 516206,
				cardtrader: 261155
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	
}

export default card
