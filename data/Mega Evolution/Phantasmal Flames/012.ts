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
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [5],

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

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857587
	}
}

export default card