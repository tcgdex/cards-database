import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Togetic",
		fr: "Togetic",
		es: "Togetic",
		it: "Togetic",
		de: "Togetic",
		'pt-br': "Togetic",
		ko: "토게틱"
	},

	illustrator: "Kanako Eo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Togepi"
	},

	description: {
		en: "They say that it will appear before kindhearted, caring people and shower them with happiness.",
		fr: "On dit qu'il se montre aux personnes dotées\nd'un cœur pur pour leur apporter joie et bonheur.",
		es: "Dicen que se le aparece a la gente de\nbuen corazón y la inunda de felicidad.",
		it: "Si dice che appaia alle persone buone\ne premurose, inondandole di felicità.",
		de: "Man sagt, es zeige sich nur gutherzigen und\neinfühlsamen Menschen und überschütte sie\ndann mit Freude.",
		'pt-br': "Diz-se que ele surgirá perante pessoas afetuosas\ne de bom coração para inundá-las de felicidade.",
		ko: "마음 착한 사람에게\n행복을 가져다주기 위해\n모습을 드러낸다고 전해진다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
			es: "Viento Feérico",
			it: "Vento di Fata",
			de: "Feenbrise",
			'pt-br': "Vento de Fada",
			ko: "요정의바람"
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
