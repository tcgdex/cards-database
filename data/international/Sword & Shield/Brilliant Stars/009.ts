import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [412],
	set: Set,

	name: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti",
		'es-es': "Burmy",
		'it-it': "Burmy",
		'pt-br': "Burmy",
		'de-de': "Burmy"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hang Down",
			'fr-fr': "Suspension",
			'es-es': "Prender",
			'it-it': "Tirar Giù",
			'pt-br': "Dependurar",
			'de-de': "Herunterhängen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "If its cloak is broken in battle, it quickly remakes the cloak with materials nearby.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608433,
				tcgplayer: 263595
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608433,
				tcgplayer: 263595
			}
		},
	],
}

export default card
