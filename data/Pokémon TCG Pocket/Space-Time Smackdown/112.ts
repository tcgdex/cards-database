import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Registeel",
		fr: "Registeel",
		es: "Registeel",
		it: "Registeel",
		de: "Registeel",
		'pt-br': "Registeel",
		ko: "레지스틸"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		en: "Registeel's body is made of a strange material that is flexible enough to stretch and shrink but also more durable than any metal.",
		fr: "Il est fait d'une matière mystérieuse plus solide que n'importe\nquel métal, mais assez souple pour pouvoir s'étirer ou se rétrécir.",
		es: "Está hecho de una misteriosa sustancia\nque, pese a ser más dura que cualquier\nmetal, se contrae y dilata con facilidad.",
		it: "È composto da un materiale misterioso più\nresistente di qualsiasi metallo, ma al contempo\nabbastanza morbido da essere elastico.",
		de: "Es besteht aus einer seltsamen Substanz,\ndie robuster als jedes Metall, jedoch zugleich\nauch weich und elastisch ist.",
		'pt-br': "O corpo de Registeel é composto de um material\nestranho que é flexível o bastante para esticar e encolher,\nmas mais resistente do que qualquer metal.",
		ko: "늘었다 줄었다 하는 유연함도 갖췄지만\n어떤 금속보다도 튼튼한\n신비한 물질로 이루어져 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			es: "Garra Metal",
			it: "Ferrartigli",
			de: "Metallklaue",
			'pt-br': "Garra de Metal",
			ko: "메탈클로"
		},

		damage: 90,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
