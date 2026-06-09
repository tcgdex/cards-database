import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		de: "Nebulak",
		'pt-br': "Gastly",
		ko: "고오스"
	},

	illustrator: "Masako Yamashita",
	category: "Pokemon",

	dexId: [92],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Suffocating Gas",
			fr: "Gaz Suffocant",
			es: "Gas Sofocante",
			it: "Gas Soffocante",
			de: "Würgegas",
			'pt-br': "Gás Asfixiante",
			ko: "가스로감싸기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.",
		fr: "Il enveloppe ses proies dans le nuage de gaz\nque forme son corps et les empoisonne à travers\nleur peau afin de les affaiblir petit à petit.",
		es: "Su estrategia consiste en envolver al rival con su\ncuerpo gaseoso y envenenarlo a través de la piel.",
		it: "Avvolge le prede nel corpo gassoso\ne le indebolisce lentamente facendo\npenetrare il veleno nella loro pelle.",
		de: "Es hüllt seine Beute in seinen Gaskörper ein\nund schwächt sie, indem es sie nach und nach\nüber die Haut vergiftet.",
		'pt-br': "Envolve o oponente em seu corpo gasoso,\nenfraquecendo sua presa lentamente\ne a envenenando pela pele.",
		ko: "가스로 된 몸으로 휘감은 다음\n먹이의 피부를 통해 조금씩\n독을 흘려보내어 약하게 만든다."
	},

	boosters: ["mewtwo"]
}

export default card
