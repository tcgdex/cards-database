import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		'es-mx': "Charmeleon",
		de: "Glutexo",
		it: "Charmeleon",
		pt: "Charmeleon"
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
			en: "Steady Firebreathing",
			fr: "Crachage de Feu Régulier",
			es: "Lanzallamas Continuo",
			'es-mx': "Escupefuego",
			de: "Stetiger Feuerhauch",
			it: "Soffiofuoco Mirato",
			pt: "Hálito de Fogo Constante"
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
		en: "When it swings its burning tail, the temperature around it rises higher and higher, tormenting its opponents.",
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
