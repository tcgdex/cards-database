import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pidgey",
		'fr-fr': "Roucool",
		'es-es': "Pidgey",
		'it-it': "Pidgey",
		'de-de': "Taubsi",
		'pt-br': "Pidgey",
		'ko-kr': "구구"
	},

	illustrator: "Scav",
	category: "Pokemon",

	dexId: [16],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'de-de': "Windstoß",
			'pt-br': "Lufada de Vento",
			'ko-kr': "바람일으키기"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
		'fr-fr': "On l'aperçoit souvent dans les forêts. Avec ses ailes,\nil brasse l'air près du sol pour projeter du sable.",
		'es-es': "Muy común en bosques y selvas.\nAletea al nivel del suelo para levantar la gravilla.",
		'it-it': "Molto comune in boschi e foreste, sbatte le ali\na livello del suolo per sollevare sabbia accecante.",
		'de-de': "Ein vorwiegend in Wäldern lebendes Pokémon,\ndas zur Verteidigung mit den Flügeln Sand aufwirbelt.",
		'pt-br': "Uma visão comum nas florestas. Ele agita suas\nasas no chão para levantar uma areia cegante.",
		'ko-kr': "숲이나 수풀에 많이 분포해 있다.\n땅에서도 격렬한 날갯짓으로\n모래를 뿌리기도 한다."
	},

	boosters: ["mewtwo"]
}

export default card
