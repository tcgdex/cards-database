import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [920],
	set: Set,

	name: {
		'en-us': "Lokix",
		'fr-fr': "Gambex",
		'es-es': "Lokix",
		'it-it': "Lokix",
		'pt-br': "Lokix",
		'de-de': "Lextremo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Nymble",
		'fr-fr': "Lilliterelle",
		'es-es': "Nymble",
		'it-it': "Nymble",
		'pt-br': "Nymble",
		'de-de': "Micrick"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spiral Kick",
			'fr-fr': "Coup'd Pied en Spirale",
			'es-es': "Patada Espiral",
			'it-it': "Spiralcalcio",
			'pt-br': "Chute Espiral",
			'de-de': "Drehtritt"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785869,
				tcgplayer: 567242
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785869,
				tcgplayer: 567242
			}
		},
	],

	illustrator: "akagi",

}

export default card
