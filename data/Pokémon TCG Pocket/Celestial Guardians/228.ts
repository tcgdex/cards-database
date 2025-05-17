import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		it: "Jigglypuff",
		de: "Pummeluff",
		'pt-br': "Jigglypuff",
		ko: "푸린"
	},

	illustrator: "Tomowaka",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
		fr: "Quand ses grands yeux luisent, il chante\nune berceuse mystérieuse et agréable\nqui pousse ses ennemis à s'endormir.",
		es: "Cuando le tiemblan sus redondos y adorables\nojos, entona una melodía agradable y misteriosa\ncon la que duerme a sus enemigos.",
		it: "Quando i suoi occhioni rotondi tremolano, canta\nuna misteriosa melodia che fa addormentare.",
		de: "Wenn seine Kulleraugen zu flackern beginnen,\nsingt es ein mysteriöses, wohlklingendes Lied,\ndas Zuhörer in Schlaf versetzt.",
		'pt-br': "Quando seus enormes olhos ficam pesados,\ncanta uma melodia misteriosa e relaxante,\nfazendo com que os inimigos adormeçam.",
		ko: "초롱초롱한 눈동자가 흔들릴 때\n졸음이 쏟아지게 하는 이상하고\n기분 좋은 노래를 부른다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			it: "Rotolamento",
			de: "Walzer",
			'pt-br': "Rolagem",
			ko: "구르기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card