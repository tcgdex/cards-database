import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'es-es': "Bidoof",
		'it-it': "Bidoof",
		'de-de': "Bidiza",
		'pt-br': "Bidoof",
		'ko-kr': "비버니"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",

	dexId: [399],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "With nerves of steel, nothing can perturb it. It is\nmore agile and active than it appears.",
		'fr-fr': "Rien ne peut perturber ses nerfs d'acier.\nIl est plus agile et énergique qu'il n'y paraît.",
		'es-es': "Tiene nervios de acero y nada puede perturbarlo.\nEs más ágil y activo de lo que aparenta.",
		'it-it': "Ha i nervi d'acciaio e niente può turbarlo.\nÈ più agile e attivo di quanto sembri.",
		'de-de': "Es hat Nerven wie Drahtseile, nichts kann es erschüttern.\nEs ist agiler und aktiver, als es scheint.",
		'pt-br': "Com nervos de aço, nada pode perturbá-lo.\nÉ mais ágil e ativo do que parece.",
		'ko-kr': "어떤 것에도 동요하지 않는\n대담한 신경의 소유자다.\n보기보다는 기민하게 활동한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'de-de': "Kopfnuss",
			'pt-br': "Cabeçada",
			'ko-kr': "박치기"
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
