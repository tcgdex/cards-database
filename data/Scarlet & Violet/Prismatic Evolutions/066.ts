import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [436],
	set: Set,

	name: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		pt: "Bronzor",
		it: "Bronzor",
		de: "Bronzel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			pt: "Martelada",
			it: "Martello",
			de: "Einhämmern"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Souichirou Gunjima",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805455,
				tcgplayer: 610421
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805455,
				tcgplayer: 610421
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806500,
				tcgplayer: 610583
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806501,
				tcgplayer: 610684
			}
		},
	],
}

export default card
