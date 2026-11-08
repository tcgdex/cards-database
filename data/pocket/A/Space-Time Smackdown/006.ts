import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'de-de': "Yanma",
		'pt-br': "Yanma",
		'ko-kr': "왕자리"
	},

	illustrator: "Eri Yamaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [193],
	hp: 50,
	types: ["Grass"],

	description: {
		'en-us': "Its eyes can see 360 degrees without moving its head. It won't miss prey—even those behind it.",
		'fr-fr': "Il voit à 360° sans avoir à tourner la tête.\nIl ne loupe jamais une proie, même dans son dos.",
		'es-es': "Su campo visual es de 360° sin girar la cabeza.\nDetecta hasta las presas que están a su espalda.",
		'it-it': "Ha un campo visivo a 360 gradi senza muovere la\ntesta. Riesce a vedere persino le prede alle sue spalle.",
		'de-de': "Mit seinen Augen hat es einen Blickwinkel von 360 Grad.\nEs sieht sogar Beute, die sich hinter ihm befindet.",
		'pt-br': "Seus olhos podem enxergar 360 graus sem que ele mova\na cabeça. Ele não perde uma presa – mesmo aquela\nque está atrás.",
		'ko-kr': "얼굴을 움직이지 않고 360도 전부\n볼 수 있는 눈을 가지고 있어서\n바로 뒤의 먹이도 놓치지 않는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'de-de': "Flattern",
			'pt-br': "Asa",
			'ko-kr': "홰치기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
