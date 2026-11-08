import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'es-es': "Houndour",
		'it-it': "Houndour",
		'de-de': "Hunduster",
		'pt-br': "Houndour",
		'ko-kr': "델빌"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [228],
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "It is smart enough to hunt in packs. It uses a variety of cries for communicating with others.",
		'fr-fr': "Ce Pokémon est rusé. Il chasse en meute en communiquant\navec les siens grâce à une variété de cris.",
		'es-es': "Tiene suficiente inteligencia para cazar en manada.\nSe comunica con los demás a través de diversos aullidos.",
		'it-it': "È abbastanza intelligente da cacciare in\nbranco, utilizzando una varietà di versi\nper comunicare con i compagni.",
		'de-de': "Es ist intelligent genug, um bei der Jagd über eine ganze\nReihe von Rufen mit seinem Rudel zu kommunizieren.",
		'pt-br': "É inteligente o suficiente para caçar em bandos.\nEle usa uma variedade de choros para se comunicar\ncom os outros.",
		'ko-kr': "수많은 울음소리를 가려 써서\n동료들과 의사소통을 하며\n사냥을 하는 지능을 가지고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'de-de': "Flackern",
			'pt-br': "Chama",
			'ko-kr': "불꽃"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card
