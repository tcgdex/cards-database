import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [218],
	set: Set,

	name: {
		'en-us': "Ethan's Slugma",
		'fr-fr': "Limagma de Luth",
		'de-de': "Klarins Schneckmag",
		'it-it': "Slugma di Armonio",
		'es-es': "Slugma de Eco",
		'pt-br': "Slugma do Ethan",
		'es-mx': "Slugma de Ethan"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Steady Firebreathing",
			'fr-fr': "Crachage de Feu Régulier",
			'de-de': "Stetiger Feuerhauch",
			'it-it': "Soffiofuoco Mirato",
			'es-es': "Lanzallamas Continuo",
			'pt-br': "Hálito de Fogo Constante",
			'es-mx': "Escupefuego"
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
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825909,
				tcgplayer: 630810
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825909,
				tcgplayer: 630810
			}
		},
	],
}

export default card
