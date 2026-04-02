import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Nosepass",
		fr: "Tarinor",
		es: "Nosepass",
		'es-mx': "Nosepass",
		de: "Nasgnet",
		it: "Nosepass",
		pt: "Nosepass"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Rolling Rocks",
			fr: "Rochers Roulants",
			es: "Rocas Rodantes",
			'es-mx': "Rocas Rodantes",
			de: "Rollende Steine",
			it: "Massi Rotolanti",
			pt: "Pedras Rolantes"
		},

		damage: 40
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684422,
		cardmarket: 877451
	}
}

export default card
