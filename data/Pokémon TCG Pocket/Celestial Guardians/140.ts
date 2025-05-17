import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Oranguru",
		fr: "Gouroutan",
		es: "Oranguru",
		it: "Oranguru",
		de: "Kommandutan",
		'pt-br': "Oranguru",
		ko: "하랑우탄"
	},

	illustrator: "Naoki Saito",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "People used to mistake Oranguru for a human when they saw it issue command after command to the other Pokémon of the forest.",
		fr: "On le prenait autrefois pour un être\nhumain, car on le voyait souvent donner\ndes ordres aux Pokémon de la forêt.",
		es: "Por la forma que tiene de dar una orden tras\notra a los Pokémon del bosque, en la antigüedad\nse pensaba que se trataba de un ser humano.",
		it: "Vedendolo dare ordini agli altri Pokémon nella foresta, in\npassato la gente lo scambiava spesso per un essere umano.",
		de: "Wegen der Art und Weise, wie sie den Pokémon\ndes Waldes ständig Befehle erteilen, hielt man sie\nvor langer Zeit für Menschen.",
		'pt-br': "As pessoas costumavam confundir Oranguru com um\nhumano quando o viam comandar outros Pokémon\nda floresta.",
		ko: "숲의 포켓몬들에게\n계속해서 지시를 내리는 모습 때문에\n옛날에는 인간이었던 것으로 여겨지고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Primate's Trap",
			fr: "Piège Simien",
			es: "Trampa Primate",
			it: "Trappola del Primate",
			de: "Primatenhinterhalt",
			'pt-br': "Armadilha de Primata",
			ko: "원숭이함정"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon cost 1 {C} more, and its Retreat Cost is 1 {C} more.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent une Énergie 1 de plus, et son Coût de Retraite augmente de une Énergie 1.",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor cuestan 1 1 más, y su Coste de Retirada es de 1 1 más.",
			it: "Durante il prossimo turno del tuo avversario, il costo degli attacchi usati dal Pokémon difensore e il suo costo di ritirata aumentano di 1 1.",
			de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der vom Verteidigenden Pokémon eingesetzten Attacken um 1 1, und seine Rückzugskosten erhöhen sich um 1 1.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão 1 1 a mais e o seu custo de Recuo será 1 1 a mais.",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬의 기술을 사용하기 위한 에너지와 후퇴에 필요한 에너지를 1에너지 1개만큼 많게 한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card
