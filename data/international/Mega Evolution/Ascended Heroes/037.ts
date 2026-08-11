import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Raboot",
		fr: "Lapyro",
		es: "Raboot",
		'es-mx': "Raboot",
		de: "Kickerlo",
		it: "Raboot",
		pt: "Raboot"
	},

	evolveFrom: {
		en: "Scorbunny",
		fr: "Flambino",
		es: "Scorbunny",
		'es-mx': "Scorbunny",
		de: "Hopplo",
		it: "Scorbunny",
		pt: "Scorbunny",
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	dexId: [814],
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Low Sweep",
			fr: "Balayette",
			es: "Puntapié",
			'es-mx': "Barredora",
			de: "Fußtritt",
			it: "Calciobasso",
			pt: "Movimento Baixo"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			'es-mx': "Combustión",
			de: "Glühen",
			it: "Fuoco Continuo",
			pt: "Combustão"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		en: "While it prides itself on its varied kicking moves, it can also deliver powerful headbutts once its flames have heated up its forehead.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869648,
			tcgplayer: 675849
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870198,
			tcgplayer: 676883
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870197,
			tcgplayer: 677023
		}
	},
],
}

export default card
