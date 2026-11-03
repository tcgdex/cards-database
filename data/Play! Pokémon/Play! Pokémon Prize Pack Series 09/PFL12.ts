import { Card } from "../../../interfaces"
import Set from "../Play! Pokémon Prize Pack Series 09"

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

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		'es-mx': "Charmander",
		de: "Glumanda",
		it: "Charmander",
		pt: "Charmander",
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
		de: "Wenn Glutexo seinen brennenden Schwanz schwingt, steigt die Temperatur um es herum immer weiter an und setzt seinen Gegnern zu."
	},

	variants: [
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 894114,
			},
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 894117,
			},
		},
	],

	illustrator: "Uninori",
  
}

export default card
