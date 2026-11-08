import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik",
		'es-es': "Kricketot",
		'it-it': "Kricketot",
		'de-de': "Zirpurze",
		'pt-br': "Kricketot",
		'ko-kr': "귀뚤뚜기"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [401],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "Its legs are short. Whenever it stumbles, its stiff antennae clack with a xylophone-like sound.",
		'fr-fr': "Il possède de courtes pattes. Quand il tombe,\nses antennes solides s'entrechoquent et émettent\ndes sons semblables à ceux d'un xylophone.",
		'es-es': "Tiene las patas cortas. Cada vez que se tropieza,\nsus antenas chocan y suenan como un xilófono.",
		'it-it': "Quando inciampa con le sue zampe corte, le antenne si\nurtano producendo un suono simile a quello di uno xilofono.",
		'de-de': "Seine Beine sind kurz. Stolpert es, reiben seine\nstarren Antennen aneinander und klingen dabei\nwie ein Xylofon.",
		'pt-br': "Suas pernas são curtas. Sempre que ele tropeça,\nsuas pomposas antenas estalam com um som\nparecido com um xilofone.",
		'ko-kr': "다리가 짧아 넘어지려고 할 때마다\n단단한 더듬이가 서로 비벼져서\n실로폰 같은 소리가 울린다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'de-de': "Käferbiss",
			'pt-br': "Picada",
			'ko-kr': "벌레먹기"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
