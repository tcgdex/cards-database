import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Arbok",
		fr: "Arbok",
		es: "Arbok",
		it: "Arbok",
		de: "Arbok",
		'pt-br': "Arbok",
		ko: "아보크"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	evolveFrom: {
		en: "Ekans"
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Corner",
			fr: "Coinçage",
			es: "Arrinconar",
			it: "Trappola",
			de: "Bedrängen",
			'pt-br': "Quina",
			ko: "몰아붙이기"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다."
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "The latest research has determined that there are over 20 possible arrangements of the patterns on its stomach.",
		fr: "Une étude récente aurait recensé plus de vingt motifs différents\npouvant orner le devant du capuchon des Arbok.",
		es: "Recientes estudios han llegado a identificar\nhasta una veintena de patrones distintos\nque puede presentar el motivo de su cuello.",
		it: "Secondo gli studi più recenti, esistono più\ndi 20 varianti del disegno che ha sul ventre.",
		de: "Jüngsten Forschungsergebnissen zufolge gibt\nes mehr als 20 verschiedene Musterungen,\ndie Arboks Bauch aufweisen kann.",
		'pt-br': "Segundo as pesquisas mais recentes,\nexistem mais de 20 variações dos\npadrões em sua barriga.",
		ko: "최근 연구에서 배 모양은\n20종류 이상의\n패턴이 있다고 판명되었다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
