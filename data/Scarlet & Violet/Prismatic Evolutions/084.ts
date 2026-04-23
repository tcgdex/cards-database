import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [428],
	set: Set,

	name: {
		en: "Lopunny",
		fr: "Lockpin",
		es: "Lopunny",
		pt: "Lopunny",
		it: "Lopunny",
		de: "Schlapor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
		es: "Buneary",
		pt: "Buneary",
		it: "Buneary",
		de: "Haspiror"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			pt: "Chute Traseiro",
			it: "Retrocalcio",
			de: "Rückwärtskick"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Tika Matsuno",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805476,
				tcgplayer: 610439
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805476,
				tcgplayer: 610439
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806528,
				tcgplayer: 610597
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806529,
				tcgplayer: 610698
			}
		},
	],
}

export default card
