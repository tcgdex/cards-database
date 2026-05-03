import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [682],
	set: Set,

	name: {
		en: "Spritzee",
		fr: "Fluvetin",
		es: "Spritzee",
		pt: "Spritzee",
		it: "Spritzee",
		de: "Parfi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
			es: "Viento Feérico",
			pt: "Vento de Fada",
			it: "Vento di Fata",
			de: "Feenbrise"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "ryoma uratsuka",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805427,
				tcgplayer: 610393
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805427,
				tcgplayer: 610393
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806456,
				tcgplayer: 610561
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806457,
				tcgplayer: 610662
			}
		},
	],
}

export default card
