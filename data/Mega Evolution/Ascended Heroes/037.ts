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

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
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

	retreat: 1,
	regulationMark: "H",

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
			cardmarket: 870197,
			tcgplayer: 676883
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870198,
			tcgplayer: 677023
		}
	},
],
}

export default card
