import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Tepig",
		fr: "Gruikui",
		es: "Tepig",
		'es-mx': "Tepig",
		de: "Floink",
		it: "Tepig",
		pt: "Tepig"
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
			en: "Ember",
			fr: "Flammèche",
			de: "Glut",
			it: "Braciere",
			es: "Ascuas",
			pt: "Brasa",
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
