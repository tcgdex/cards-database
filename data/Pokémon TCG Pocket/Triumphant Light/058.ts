import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		de: "Bronzel",
		'pt-br': "Bronzor",
		ko: "동미러"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [436],
	hp: 60,
	types: ["Metal"],

	description: {
		en: "Ancient people believed that the pattern on Bronzor's back contained a mysterious power.",
		fr: "On croyait autrefois que les motifs qui ornent\nson dos renfermaient une puissance mystique.",
		es: "Antaño se creía que en el dibujo de su parte\nposterior residía una fuerza misteriosa.",
		it: "Nell'antichità si credeva che una forza misteriosa\ndimorasse nei disegni sul dorso di Bronzor.",
		de: "Früher glaubten die Menschen, dem Muster auf\nseinem Rücken wohne eine mysteriöse Kraft inne.",
		'pt-br': "Os povos antigos acreditavam que o padrão nas costas\nde Bronzor continha um poder misterioso.",
		ko: "옛날 사람들은 동미러의\n등 무늬에 신비한 힘이\n깃들어 있다고 믿었다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			de: "Ramme",
			'pt-br': "Aríete",
			ko: "부딪치기"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
