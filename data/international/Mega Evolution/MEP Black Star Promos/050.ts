import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
		'es-es': "Tepig",
		'es-mx': "Tepig",
		'de-de': "Floink",
		'it-it': "Tepig",
		'pt-br': "Tepig"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [498],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Ember",
			'fr-fr': "Flammèche",
			'de-de': "Glut",
			'it-it': "Braciere",
			'es-es': "Ascuas",
			'pt-br': "Brasa",
			'es-mx': "Ascuas"
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886619,
				tcgplayer: 699874
			}
		},
	],
}

export default card
