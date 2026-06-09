import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [228],
	set: Set,

	name: {
		en: "Houndour",
		fr: "Malosse",
		es: "Houndour",
		pt: "Houndour",
		it: "Houndour",
		de: "Hunduster"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Playful Kick",
			fr: "Coup de Pied de Garnement",
			es: "Patada Juguetona",
			pt: "Chute Brincalhão",
			it: "Calcio Briccone",
			de: "Verspielter Kick"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Mékayu",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805451,
				tcgplayer: 610417
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805451,
				tcgplayer: 610417
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806494,
				tcgplayer: 610580
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806495,
				tcgplayer: 610681
			}
		},
	],
}

export default card
