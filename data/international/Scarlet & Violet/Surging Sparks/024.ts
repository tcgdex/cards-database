import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [636],
	set: Set,

	name: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Steady Firebreathing",
			'fr-fr': "Crachage de Feu Régulier",
			'es-es': "Lanzallamas Continuo",
			'it-it': "Soffiofuoco Mirato",
			'pt-br': "Hálito de Fogo Constante",
			'de-de': "Stetiger Feuerhauch"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794279,
				tcgplayer: 589981
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794279,
				tcgplayer: 589981
			}
		},
	],

	illustrator: "MARINA Chikazawa",
	
}

export default card
