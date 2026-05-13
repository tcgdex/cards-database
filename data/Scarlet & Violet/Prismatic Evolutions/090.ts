import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [714],
	set: Set,

	name: {
		en: "Noibat",
		fr: "Sonistrelle",
		es: "Noibat",
		pt: "Noibat",
		it: "Noibat",
		de: "eF-eM"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			pt: "Asa",
			it: "Alabattito",
			de: "Flattern"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Masako Tomii",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805482,
				tcgplayer: 610445
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805482,
				tcgplayer: 610445
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806540,
				tcgplayer: 610603
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806541,
				tcgplayer: 610704
			}
		},
	],
}

export default card
