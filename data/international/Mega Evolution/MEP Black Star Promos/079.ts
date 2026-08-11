import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

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

	illustrator: "Teeziro",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [5],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'es-mx': "Charmander",
		'de-de': "Glumanda",
		'it-it': "Charmander",
		'pt-br': "Charmander"
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Steady Firebreathing",
			'fr-fr': "Crachage de Feu Régulier",
			'es-es': "Lanzallamas Continuo",
			'es-mx': "Lanzallamas Continuo",
			'de-de': "Stetiger Feuerhauch",
			'it-it': "Soffiofuoco Mirato",
			'pt-br': "Hálito de Fogo Constante"
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "I",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 888607,
				tcgplayer: 694693
			}
		},
	],
}

export default card
