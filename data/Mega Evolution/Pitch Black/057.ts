import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Maschiff",
		fr: "Grondogue",
		es: "Maschiff",
		'es-mx': "Maschiff",
		de: "Mobtiff",
		it: "Maschiff",
		pt: "Maschiff"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [942],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			'es-mx': "Mordida",
			de: "Biss",
			it: "Morso",
			pt: "Mordida"
		},

		cost: ["Darkness", "Darkness"],

		damage: 40
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895842,
				tcgplayer: 704814
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895842,
				tcgplayer: 704814
			}
		},
	],
}

export default card
