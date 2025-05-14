import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgey",
		fr: "Roucool",
		es: "Pidgey",
		it: "Pidgey",
		de: "Taubsi",
		'pt-br': "Pidgey",
		ko: "구구"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			de: "Windstoß",
			'pt-br': "Lufada de Vento",
			ko: "바람일으키기"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	rarity: "One Diamond",

	description: {
		en: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
		fr: "On l'aperçoit souvent dans les forêts. Avec ses ailes,\nil brasse l'air près du sol pour projeter du sable.",
		es: "Muy común en bosques y selvas.\nAletea al nivel del suelo para levantar la gravilla.",
		it: "Molto comune in boschi e foreste, sbatte le ali\na livello del suolo per sollevare sabbia accecante.",
		de: "Ein vorwiegend in Wäldern lebendes Pokémon,\ndas zur Verteidigung mit den Flügeln Sand aufwirbelt.",
		'pt-br': "Uma visão comum nas florestas. Ele agita suas\nasas no chão para levantar uma areia cegante.",
		ko: "숲이나 수풀에 많이 분포해 있다.\n땅에서도 격렬한 날갯짓으로\n모래를 뿌리기도 한다."
	}
}

export default card
