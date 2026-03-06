import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Galvantula",
		fr: "Mygavolt",
		es: "Galvantula",
		it: "Galvantula",
		de: "Voltula",
		'pt-br': "Galvantula",
		ko: "전툴라"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",

	dexId: [596],
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Joltik"
	},

	description: {
		en: "It launches electrified fur from its abdomen as its means of attack. Opponents hit by the fur could be in for three full days and nights of paralysis.",
		fr: "Il attaque en projetant les poils de son abdomen\nchargés en électricité. La victime reste alors\nparalysée pendant trois jours et trois nuits.",
		es: "Ataca lanzando hilos electrificados por el\nabdomen, que inmovilizan por completo al\nenemigo durante tres días y tres noches.",
		it: "Attacca lanciando peli carichi di elettricità dall'addome.\nChi viene colpito rimane paralizzato per tre giorni interi.",
		de: "Es schießt elektrisch geladene Haare von seinem\nAbdomen. Wer getroffen wird, ist drei Tage und\nNächte am ganzen Körper gelähmt.",
		'pt-br': "Para atacar, lança pelos eletrificados do abdômen. Os oponentes que forem\natingidos por estes pelos poderão enfrentar três dias e três noites de paralisia.",
		ko: "전기를 띤 배의 털을 날려서\n공격한다. 털에 찔리면\n삼 일 밤낮으로 전신이 마비된다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electroweb",
			fr: "Toile Élek",
			es: "Electrotela",
			it: "Elettrotela",
			de: "Elektronetz",
			'pt-br': "Teia Elétrica",
			ko: "일렉트릭네트"
		},

		damage: 70,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
