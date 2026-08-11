import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'de-de': "Pummeluff",
		'pt-br': "Jigglypuff",
		'ko-kr': "푸린"
	},

	illustrator: "Kanako Eo",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [39],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "It hugely inflates its stomach and sings a mysterious melody. If you hear this melody, you'll become sleepy right away.",
		'fr-fr': "Ce Pokémon aime inspirer profondément\net chanter une mélodie mystérieuse qui endort\nimmédiatement tous ceux qui l'entendent.",
		'es-es': "Hincha su vientre considerablemente y entona una melodía\nmisteriosa que duerme en el acto a todo aquel que la oye.",
		'it-it': "Gonfia la pancia per cantare una melodia\nmisteriosa che fa addormentare chiunque l'ascolti.",
		'de-de': "Es kann tief einatmen und seinen Bauch mit Luft\nfüllen, um ein sonderbares Lied anzustimmen.\nWer dieses hört, schläft auf der Stelle ein.",
		'pt-br': "Infla seu estômago e canta uma melodia misteriosa.\nSe você ouvir esta melodia,\nacabará dormindo na mesma hora.",
		'ko-kr': "배를 크게 부풀려서\n신비한 멜로디를 노래한다.\n들으면 바로 졸음이 쏟아진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'it-it': "Rotolamento",
			'de-de': "Walzer",
			'pt-br': "Rolagem",
			'ko-kr': "구르기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card