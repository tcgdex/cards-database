import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [583],
	set: Set,

	name: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
		'es-es': "Vanillish",
		'it-it': "Vanillish",
		'pt-br': "Vanillish",
		'de-de': "Gelatroppo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Vanillite",
		'fr-fr': "Sorbébé",
		'es-es': "Vanillite",
		'it-it': "Vanillite",
		'pt-br': "Vanillite",
		'de-de': "Gelatini"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Frost Smash",
			'fr-fr': "Impact Glacial",
			'es-es': "Golpe Gélido",
			'it-it': "Gelocolpo",
			'pt-br': "Pancada Congelada",
			'de-de': "Frostschlag"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It blasts enemies with cold air reaching −148 degrees Fahrenheit, freezing them solid. But it spares their lives afterward—it's a kind Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740521,
				tcgplayer: 523653,
				cardtrader: 265123
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740521,
				tcgplayer: 523653,
				cardtrader: 265123
			}
		},
	],

	illustrator: "Lee HyunJung",

	
}

export default card
