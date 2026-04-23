import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [667],
	set: Set,

	name: {
		en: "Litleo",
		fr: "Hélionceau",
		es: "Litleo",
		pt: "Litleo",
		it: "Litleo",
		de: "Leufeo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			pt: "Combustão",
			it: "Fuoco Continuo",
			de: "Glühen"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			pt: "Cabeçada",
			it: "Bottintesta",
			de: "Kopfnuss"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Whisker",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805404,
				tcgplayer: 610370
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805404,
				tcgplayer: 610370
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806428,
				tcgplayer: 610546
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806429,
				tcgplayer: 610647
			}
		},
	],
}

export default card
