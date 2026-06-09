import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Glameow",
		fr: "Chaglam",
		es: "Glameow",
		it: "Glameow",
		de: "Charmian",
		'pt-br': "Glameow",
		ko: "나옹마"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [431],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It claws if displeased and purrs when affectionate. Its fickleness is very popular among some.",
		fr: "Il griffe quand il est en colère et ronronne quand\nil est heureux. Certains aiment ce côté lunatique.",
		es: "Araña cuando está enfadado y ronronea cuando\nestá cariñoso. Su imprevisibilidad es famosa.",
		it: "Se disturbato, tira fuori gli artigli; se soddisfatto,\nfa le fusa. La sua incostanza piace a molti.",
		de: "Es schlägt mit Krallen zu oder schnurrt, je nachdem,\nob es gerade wütend oder zutraulich ist.",
		'pt-br': "Arranha quando está descontente e ronrona\nquando está carinhoso. Há quem goste muito\nda sua natureza inconstante.",
		ko: "마음에 안 들면 발톱을 세우지만\n가끔 울음소리로 응석을 부리는\n성격이 일부에게 매우 인기가 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pose",
			fr: "Pose",
			es: "Posturita",
			it: "Posa",
			de: "Posieren",
			'pt-br': "Posar",
			ko: "폼잡기"
		},

		damage: 40,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
