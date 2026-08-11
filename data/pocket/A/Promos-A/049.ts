import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'de-de': "Relaxo",
		'pt-br': "Snorlax",
		'ko-kr': "잠만보"
	},

	illustrator: "okayamatakatoshi",
	rarity: "None",
	category: "Pokemon",

	dexId: [143],
	hp: 140,
	types: ["Colorless"],

	description: {
		'en-us': "It is not satisfied unless it eats over 880 pounds\nof food every day. When it is done eating, it\ngoes promptly to sleep.",
		'fr-fr': "Ronflex n'est pas satisfait tant qu'il n'a pas avalé\nses 400 kg de nourriture quotidienne. Dès qu'il\na fini, il commence une sieste pour digérer.",
		'es-es': "No se encuentra satisfecho hasta haber\ningerido 400 kg de comida cada día.\nCuando acaba de comer, se queda dormido.",
		'it-it': "Dopo aver trangugiato i suoi immancabili 400 kg\ndi cibo quotidiani, cade in un sonno profondo.",
		'de-de': "Es muss über 400 kg Nahrung am Tag fressen,\num satt zu werden. Ist es mit dem Essen fertig,\nschläft es sofort ein.",
		'pt-br': "Não se satisfaz a menos que coma mais de\n400 kg de alimentos todos os dias. Quando\ntermina de comer, dorme imediatamente.",
		'ko-kr': "하루에 400kg의 음식을\n먹지 않으면 성에 차지 않는다.\n다 먹으면 잠이 들어 버린다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Collapse",
			'fr-fr': "Effondrement",
			'es-es': "Colapso",
			'it-it': "Collassare",
			'de-de': "Kollaps",
			'pt-br': "Colapso",
			'ko-kr': "쓰러지기"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This Pokémon is now Asleep.",
			'fr-fr': "Ce Pokémon est maintenant Endormi.",
			'es-es': "Este Pokémon pasa a estar Dormido.",
			'it-it': "Questo Pokémon viene addormentato.",
			'de-de': "Dieses Pokémon ist jetzt schläft.",
			
			'ko-kr': "이 포켓몬을 잠듦으로 만든다.",
			'pt-br': "Este Pokémon agora está Adormecido."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4,
	boosters: []
}

export default card
