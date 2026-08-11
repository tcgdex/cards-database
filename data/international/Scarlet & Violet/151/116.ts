import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [116],
	set: Set,

	name: {
		'fr-fr': "Hypotrempe",
		'en-us': "Horsea",
		'es-es': "Horsea",
		'it-it': "Horsea",
		'pt-br': "Horsea",
		'de-de': "Seeper"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Pluie Éclaboussante",
			'en-us': "Rain Splash",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Aileron Aiguisé",
			'en-us': "Sharp Fin",
			'es-es': "Cortaleta",
			'it-it': "Pinnaffilata",
			'pt-br': "Barbatana Afiada",
			'de-de': "Schneidige Flosse"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "They swim with dance-like motions and cause whirlpools to form. Horsea compete to see which of them can generate the biggest whirlpool.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733711,
				tcgplayer: 516583,
				cardtrader: 261123
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733711,
				tcgplayer: 516583,
				cardtrader: 261123
			}
		},
	],

	illustrator: "aspara",

	
}

export default card
