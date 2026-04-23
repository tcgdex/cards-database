import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		'es-mx': "Gastly",
		de: "Nebulak",
		it: "Gastly",
		pt: "Gastly"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [92],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Petty Grudge",
			fr: "Rancune Mesquine",
			es: "Rencor Ruin",
			'es-mx': "Rencor Ruin",
			de: "Mini-Groll",
			it: "Rancormeschino",
			pt: "Rancinho"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 857629,
				tcgplayer: 660495
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 857629,
				tcgplayer: 660495
			}
		}
	],
}

export default card
