import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [868],
	set: Set,

	name: {
		en: "Milcery",
		fr: "Crèmy",
		es: "Milcery",
		de: "Hokumil",
		it: "Milcery",
		pt: "Milcery",
		'es-mx': "Milcery"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			de: "Tackle",
			it: "Azione",
			pt: "Investida",
			'es-mx': "Tacleada"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Shibuzoh.",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817226,
				tcgplayer: 623501
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817226,
				tcgplayer: 623501
			}
		},
	],
}

export default card
