import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Erika's Bellsprout",
		fr: "Chétiflor d'Erika",
		es: "Bellsprout de Erika",
		'es-mx': "Bellsprout de Erika",
		de: "Erikas Knofensa",
		it: "Bellsprout di Erika",
		pt: "Bellsprout da Érica"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	dexId: [69],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Vine Slap",
			fr: "Gifle de Liane",
			es: "Bofetón Látigo",
			'es-mx': "Lianazo",
			de: "Rankenklatscher",
			it: "Lianasberla",
			pt: "Tapa de Vinhas"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869615,
				tcgplayer: 675816
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 869615,
				tcgplayer: 675816
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 870139,
				tcgplayer: 676854
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870140,
				tcgplayer: 676994
			}
		},
	],
}

export default card