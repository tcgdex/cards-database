import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Hoothoot",
		fr: "Hoothoot",
		es: "Hoothoot",
		it: "Hoothoot",
		de: "Hoothoot",
		'pt-br': "Hoothoot",
		ko: "부우부"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It always stands on one foot. It changes feet so fast, the movement can rarely be seen.",
		fr: "Il se tient toujours sur un pied.\nIl en change si vite qu'on peut\nà peine distinguer ce mouvement.",
		es: "Se apoya en una sola pata y, cuando cambia de una\na otra, se mueve tan rápido que apenas se percibe.",
		it: "Sta sempre su una zampa sola. Cambia\nzampa così rapidamente che è quasi\nimpossibile seguirne i movimenti.",
		de: "Es steht immer auf einem Bein. Es wechselt sein\nStandbein so schnell, dass man es kaum sieht.",
		'pt-br': "Sempre fica sobre um pé e troca de pé tão rápido\nque o movimento raramente é percebido.",
		ko: "항상 한 발로 서 있다.\n발을 교체하는 순간이\n빨라서 좀처럼 볼 수 없다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			de: "Pikser",
			'pt-br': "Bicada",
			ko: "쪼기"
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
