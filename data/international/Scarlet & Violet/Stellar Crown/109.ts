import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [966],
	set: Set,

	name: {
		'en-us': "Revavroom",
		'fr-fr': "Vrombotor",
		'es-es': "Revavroom",
		'it-it': "Revavroom",
		'pt-br': "Revavroom",
		'de-de': "Knattatox"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Varoom",
		'fr-fr': "Vrombi",
		'es-es': "Varoom",
		'it-it': "Varoom",
		'pt-br': "Varoom",
		'de-de': "Knattox"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Outta-Control Dash",
			'fr-fr': "Ruée Incontrôlable",
			'es-es': "A Todo Gas",
			'it-it': "Corsa Senza Freni",
			'pt-br': "Investida Desgovernada",
			'de-de': "Furioses Flitzen"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785963,
				tcgplayer: 567335
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785963,
				tcgplayer: 567335
			}
		},
	],

	illustrator: "GOSSAN",

}

export default card
