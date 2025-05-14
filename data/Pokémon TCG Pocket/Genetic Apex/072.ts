import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Goldeen",
		fr: "Poissirène",
		es: "Goldeen",
		it: "Goldeen",
		de: "Goldini",
		'pt-br': "Goldeen",
		ko: "콘치"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flop",
			fr: "Flop",
			es: "Vuelta",
			it: "Tonfo",
			de: "Plumps",
			'pt-br': "Baque",
			ko: "돌아다니며 뛰기"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.",
		fr: "Ses nageoires dorsales, pectorales\net caudales ondulent avec élégance.\nIl est surnommé le \" danseur des flots \".",
		es: "Sus aletas pectorales, caudal y dorsal ondean gráciles\nen el agua. Por eso se le llama el Bailarín Acuático.",
		it: "Le pinne su dorso, petto e coda ondeggiano con\ngrazia. Perciò viene chiamato \"danzatore d'acqua\".",
		de: "Seine Brust-, Rücken- und Schwanzflossen\nbewegen sich anmutig. Daher nennt man es\nden \"Wassertänzer\".",
		'pt-br': "As suas barbatanas nas costas, peito e cauda\nagitam-se com elegância na água. É por isso que\neste Pokémon é conhecido como o bailarino das águas.",
		ko: "등, 가슴, 꼬리지느러미가\n우아하게 나부끼기 때문에\n물의 무희라고 불린다."
	}
}

export default card
