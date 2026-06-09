import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Joltik",
		fr: "Statitik",
		es: "Joltik",
		it: "Joltik",
		de: "Wattzapf",
		'pt-br': "Joltik",
		ko: "파쪼옥"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",

	dexId: [595],
	hp: 40,
	types: ["Lightning"],

	description: {
		en: "Joltik can be found clinging to other Pokémon. It's soaking up static electricity because it can't produce a charge on its own.",
		fr: "Il s'accroche au corps des autres Pokémon\npour absorber leur électricité statique.\nIl est incapable d'en produire tout seul.",
		es: "No puede generar electricidad por sí mismo,\nasí que se encarama a otros Pokémon\ny absorbe su energía estática.",
		it: "Si aggrappa al corpo di altri Pokémon\ne ne assorbe l'energia elettrostatica.\nNon può produrre elettricità da sé.",
		de: "Wattzapf heftet sich an andere Pokémon und\nsaugt ihnen statische Elektrizität ab. Es selbst\nkann keinen Strom produzieren.",
		'pt-br': "Joltik podem ser encontrados agarrados a outros Pokémon, absorvendo\nenergia estática, já que não conseguem produzir sua própria eletricidade.",
		ko: "포켓몬의 몸에 들러붙어\n정전기를 흡수한다.\n스스로는 전기를 만들 수 없다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			es: "Picadura",
			it: "Coleomorso",
			de: "Käferbiss",
			'pt-br': "Picada",
			ko: "벌레먹기"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
