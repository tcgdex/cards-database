import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Bidoof",
		fr: "Keunotor",
		es: "Bidoof",
		it: "Bidoof",
		de: "Bidiza",
		'pt-br': "Bidoof",
		ko: "비버니"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "With nerves of steel, nothing can perturb it. It is more agile and active than it appears.",
		fr: "Rien ne peut perturber ses nerfs d'acier.\nIl est plus agile et énergique qu'il n'y paraît.",
		es: "Tiene nervios de acero y nada puede perturbarlo.\nEs más ágil y activo de lo que aparenta.",
		it: "Ha i nervi d'acciaio e niente può turbarlo.\nÈ più agile e attivo di quanto sembri.",
		de: "Es hat Nerven wie Drahtseile, nichts kann es erschüttern.\nEs ist agiler und aktiver, als es scheint.",
		'pt-br': "Com nervos de aço, nada pode perturbá-lo.\nÉ mais ágil e ativo do que parece.",
		ko: "어떤 것에도 동요하지 않는\n대담한 신경의 소유자다.\n보기보다는 기민하게 활동한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			de: "Kopfnuss",
			'pt-br': "Cabeçada",
			ko: "박치기"
		},

		cost: ["Colorless", "Colorless"],
		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol6"]
}

export default card
