import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'es-mx': "Charmeleon",
		'de-de': "Glutexo",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon"
	},

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'es-mx': "Charmander",
		'de-de': "Glumanda",
		'it-it': "Charmander",
		'pt-br': "Charmander",
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [5],
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Steady Firebreathing",
			'fr-fr': "Crachage de Feu Régulier",
			'es-es': "Lanzallamas Continuo",
			'es-mx': "Escupefuego",
			'de-de': "Stetiger Feuerhauch",
			'it-it': "Soffiofuoco Mirato",
			'pt-br': "Hálito de Fogo Constante"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "When it swings its burning tail, the temperature around it rises higher and higher, tormenting its opponents.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857587,
				tcgplayer: 662144,
				cardtrader: 356796
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857587,
				tcgplayer: 662144,
				cardtrader: 356796
			}
		},
	],

	illustrator: "Uninori",
  
}

export default card
