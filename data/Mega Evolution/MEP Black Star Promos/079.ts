import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

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

	illustrator: "Teeziro",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [5],

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		'es-mx': "Charmander",
		de: "Glumanda",
		it: "Charmander",
		pt: "Charmander"
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Steady Firebreathing",
			fr: "Crachage de Feu Régulier",
			es: "Lanzallamas Continuo",
			'es-mx': "Lanzallamas Continuo",
			de: "Stetiger Feuerhauch",
			it: "Soffiofuoco Mirato",
			pt: "Hálito de Fogo Constante"
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
