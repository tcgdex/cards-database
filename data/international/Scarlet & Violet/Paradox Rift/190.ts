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

	rarity: "Illustration rare",
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
			type: 'holo',
			thirdParty: {
				cardmarket: 740733,
				tcgplayer: 523871,
				cardtrader: 265222
			}
		},
		{
			type: 'holo',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 845406
			}
		},
	],

	illustrator: "Taiga Kayama",

	
}

export default card
