import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [427],
	set: Set,

	name: {
		en: "Buneary",
		fr: "Laporeille",
		es: "Buneary",
		pt: "Buneary",
		it: "Buneary",
		de: "Haspiror"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			es: "Patada Destrucción",
			pt: "Chute Poderoso",
			it: "Calcio Esplosivo",
			de: "Schmetterkick"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Naoki Saito",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805475,
				tcgplayer: 610438
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805475,
				tcgplayer: 610438
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806526,
				tcgplayer: 610596
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806527,
				tcgplayer: 610697
			}
		},
	],
}

export default card
