import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		de: "Relaxo",
		'pt-br': "Snorlax",
		ko: "잠만보"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			it: "Rotolamento",
			de: "Walzer",
			'pt-br': "Rolagem",
			ko: "구르기"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4,
	rarity: "One Star",

	description: {
		en: "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
		fr: "Ronflex n'est pas satisfait tant qu'il n'a pas avalé\nses 400 kg de nourriture quotidienne. Dès qu'il\na fini, il commence une sieste pour digérer.",
		es: "No se encuentra satisfecho hasta haber\ningerido 400 kg de comida cada día.\nCuando acaba de comer, se queda dormido.",
		it: "Dopo aver trangugiato i suoi immancabili 400 kg\ndi cibo quotidiani, cade in un sonno profondo.",
		de: "Es muss über 400 kg Nahrung am Tag fressen,\num satt zu werden. Ist es mit dem Essen fertig,\nschläft es sofort ein.",
		'pt-br': "Não se satisfaz a menos que coma mais de\n400 kg de alimentos todos os dias. Quando\ntermina de comer, dorme imediatamente.",
		ko: "하루에 400kg의 음식을\n먹지 않으면 성에 차지 않는다.\n다 먹으면 잠이 들어 버린다."
	}
}

export default card
