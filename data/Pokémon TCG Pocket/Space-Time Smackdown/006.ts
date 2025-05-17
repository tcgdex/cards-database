import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Yanma",
		fr: "Yanma",
		es: "Yanma",
		it: "Yanma",
		de: "Yanma",
		'pt-br': "Yanma",
		ko: "왕자리"
	},

	illustrator: "Eri Yamaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "Its eyes can see 360 degrees without moving its head. It won't miss prey—even those behind it.",
		fr: "Il voit à 360° sans avoir à tourner la tête.\nIl ne loupe jamais une proie, même dans son dos.",
		es: "Su campo visual es de 360° sin girar la cabeza.\nDetecta hasta las presas que están a su espalda.",
		it: "Ha un campo visivo a 360 gradi senza muovere la\ntesta. Riesce a vedere persino le prede alle sue spalle.",
		de: "Mit seinen Augen hat es einen Blickwinkel von 360 Grad.\nEs sieht sogar Beute, die sich hinter ihm befindet.",
		'pt-br': "Seus olhos podem enxergar 360 graus sem que ele mova\na cabeça. Ele não perde uma presa – mesmo aquela\nque está atrás.",
		ko: "얼굴을 움직이지 않고 360도 전부\n볼 수 있는 눈을 가지고 있어서\n바로 뒤의 먹이도 놓치지 않는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			de: "Flattern",
			'pt-br': "Asa",
			ko: "홰치기"
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
