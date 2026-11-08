import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
		'es-es': "Hoothoot",
		'it-it': "Hoothoot",
		'de-de': "Hoothoot",
		'pt-br': "Hoothoot",
		'ko-kr': "부우부"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [163],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "It always stands on one foot. It changes feet so fast, the movement can rarely be seen.",
		'fr-fr': "Il se tient toujours sur un pied.\nIl en change si vite qu'on peut\nà peine distinguer ce mouvement.",
		'es-es': "Se apoya en una sola pata y, cuando cambia de una\na otra, se mueve tan rápido que apenas se percibe.",
		'it-it': "Sta sempre su una zampa sola. Cambia\nzampa così rapidamente che è quasi\nimpossibile seguirne i movimenti.",
		'de-de': "Es steht immer auf einem Bein. Es wechselt sein\nStandbein so schnell, dass man es kaum sieht.",
		'pt-br': "Sempre fica sobre um pé e troca de pé tão rápido\nque o movimento raramente é percebido.",
		'ko-kr': "항상 한 발로 서 있다.\n발을 교체하는 순간이\n빨라서 좀처럼 볼 수 없다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'de-de': "Pikser",
			'pt-br': "Bicada",
			'ko-kr': "쪼기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
