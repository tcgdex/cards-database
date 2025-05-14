import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Houndour",
		fr: "Malosse",
		es: "Houndour",
		it: "Houndour",
		de: "Hunduster",
		'pt-br': "Houndour",
		ko: "델빌"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "It is smart enough to hunt in packs. It uses a variety of cries for communicating with others.",
		fr: "Ce Pokémon est rusé. Il chasse en meute en communiquant\navec les siens grâce à une variété de cris.",
		es: "Tiene suficiente inteligencia para cazar en manada.\nSe comunica con los demás a través de diversos aullidos.",
		it: "È abbastanza intelligente da cacciare in\nbranco, utilizzando una varietà di versi\nper comunicare con i compagni.",
		de: "Es ist intelligent genug, um bei der Jagd über eine ganze\nReihe von Rufen mit seinem Rudel zu kommunizieren.",
		'pt-br': "É inteligente o suficiente para caçar em bandos.\nEle usa uma variedade de choros para se comunicar\ncom os outros.",
		ko: "수많은 울음소리를 가려 써서\n동료들과 의사소통을 하며\n사냥을 하는 지능을 가지고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			it: "Fiammata",
			de: "Flackern",
			'pt-br': "Chama",
			ko: "불꽃"
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
