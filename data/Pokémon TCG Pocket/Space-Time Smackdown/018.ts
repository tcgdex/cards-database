import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Vespiquen",
		fr: "Apireine",
		es: "Vespiquen",
		it: "Vespiquen",
		de: "Honweisel",
		'pt-br': "Vespiquen",
		ko: "비퀸"
	},

	illustrator: "chibi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Combee"
	},

	description: {
		en: "It houses its colony in cells in its body and releases various pheromones to make those grubs do its bidding.",
		fr: "Son abdomen abrite ses petits, qu'il\ncontrôle grâce à des phéromones.",
		es: "Cría larvas en los panales de su cuerpo y\nsegrega diversas feromonas para controlarlas.",
		it: "Nell'addome ospita la sua progenie, sulla quale esercita\nun controllo assoluto tramite i feromoni che rilascia.",
		de: "Sein Rumpf fungiert als Wabe für die Larven,\ndie es mithilfe verschiedener Pheromone frei\nherumkommandieren kann.",
		'pt-br': "Guarda sua colônia em células do seu corpo\ne libera vários feromônios para que as larvas\ncumpram suas exigências.",
		ko: "몸통은 새끼들의 둥지다.\n여러 페로몬을 내뿜어\n새끼들을 자유롭게 조종한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			it: "Perforare",
			de: "Durchbohren",
			'pt-br': "Perfurar",
			ko: "궤찌르기"
		},

		damage: 70,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
