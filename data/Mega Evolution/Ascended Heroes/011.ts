import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Wurmple",
		fr: "Chenipotte",
		es: "Wurmple",
		'es-mx': "Wurmple",
		de: "Waumpel",
		it: "Wurmple",
		pt: "Wurmple"
	},

	illustrator: "USGMEN",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			es: "Picadura",
			'es-mx': "Picadura",
			de: "Käferbiss",
			it: "Coleomorso",
			pt: "Picada"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869622,
				tcgplayer: 675823
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 869622,
				tcgplayer: 675823
			}
		},
		{
			type: "reverse",
			foil: "loveball",
			thirdParty: {
				cardmarket: 870151,
				tcgplayer: 676860
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870152,
				tcgplayer: 677000
			}
		},
	],
}

export default card
