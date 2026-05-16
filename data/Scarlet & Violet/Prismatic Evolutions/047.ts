import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [246],
	set: Set,

	name: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		pt: "Larvitar",
		it: "Larvitar",
		de: "Larvitar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			pt: "Cabeçada",
			it: "Bottintesta",
			de: "Kopfnuss"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Shimaris Yukichi",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805436,
				tcgplayer: 610402
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805436,
				tcgplayer: 610402
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806472,
				tcgplayer: 610569
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806473,
				tcgplayer: 610670
			}
		},
	],
}

export default card
