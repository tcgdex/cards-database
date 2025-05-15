import { Card } from "../../../interfaces"
import Set from "../Promos-A"

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

	illustrator: "Kurata So",
	rarity: "None",
	category: "Pokemon",
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Sing",
			fr: "Berceuse",
			es: "Canto",
			it: "Canto",
			de: "Gesang",
			'pt-br': "Canção",
			ko: "노래하기"
		},

		cost: ["Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Asleep.",
			ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido."
		}
	}],

	hp: 50,

	description: {
		en: "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
		fr: "Quand ses grands yeux luisent, il chante\nune berceuse mystérieuse et agréable\nqui pousse ses ennemis à s'endormir.",
		es: "Cuando le tiemblan sus redondos y adorables\nojos, entona una melodía agradable y misteriosa\ncon la que duerme a sus enemigos.",
		it: "Quando i suoi occhioni rotondi tremolano, canta\nuna misteriosa melodia che fa addormentare.",
		de: "Wenn seine Kulleraugen zu flackern beginnen,\nsingt es ein mysteriöses, wohlklingendes Lied,\ndas Zuhörer in Schlaf versetzt.",
		'pt-br': "Quando seus enormes olhos ficam pesados,\ncanta uma melodia misteriosa e relaxante,\nfazendo com que os inimigos adormeçam.",
		ko: "초롱초롱한 눈동자가 흔들릴 때\n졸음이 쏟아지게 하는 이상하고\n기분 좋은 노래를 부른다."
	},

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
