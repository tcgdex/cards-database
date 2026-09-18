import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years."
	},

	name: {
		en: "Ninetales",
		fr: "Feunard",
		de: "Vulnona",
		es: "Ninetales",
		it: "Ninetales",
		'es-mx': "Ninetales"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [38],
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flame Tail",
			fr: "Queue de Flammes",
			de: "Flammenschweif",
			es: "Cola de Fuego",
			it: "Codafiamma",
			'es-mx': "Cola de Fuego"
		},

		damage: 60,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907736,
				tcgplayer: 716444
			}
		}
	],
}

export default card