import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
		'es-es': "Togetic",
		'it-it': "Togetic",
		'de-de': "Togetic",
		'pt-br': "Togetic",
		'ko-kr': "토게틱"
	},

	illustrator: "Kanako Eo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [176],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Togepi"
	},

	description: {
		'en-us': "They say that it will appear before kindhearted, caring people and shower them with happiness.",
		'fr-fr': "On dit qu'il se montre aux personnes dotées\nd'un cœur pur pour leur apporter joie et bonheur.",
		'es-es': "Dicen que se le aparece a la gente de\nbuen corazón y la inunda de felicidad.",
		'it-it': "Si dice che appaia alle persone buone\ne premurose, inondandole di felicità.",
		'de-de': "Man sagt, es zeige sich nur gutherzigen und\neinfühlsamen Menschen und überschütte sie\ndann mit Freude.",
		'pt-br': "Diz-se que ele surgirá perante pessoas afetuosas\ne de bom coração para inundá-las de felicidade.",
		'ko-kr': "마음 착한 사람에게\n행복을 가져다주기 위해\n모습을 드러낸다고 전해진다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fairy Wind",
			'fr-fr': "Vent Féérique",
			'es-es': "Viento Feérico",
			'it-it': "Vento di Fata",
			'de-de': "Feenbrise",
			'pt-br': "Vento de Fada",
			'ko-kr': "요정의바람"
		},

		damage: 40,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
