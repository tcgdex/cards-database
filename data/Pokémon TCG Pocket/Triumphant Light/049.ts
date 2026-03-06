import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Golbat",
		fr: "Nosferalto",
		es: "Golbat",
		it: "Golbat",
		de: "Golbat",
		'pt-br': "Golbat",
		ko: "골뱃"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [42],
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zubat"
	},

	description: {
		en: "It loves to drink other creatures' blood. It's said that if it finds others of its kind going hungry, it sometimes shares the blood it's gathered.",
		fr: "Le sang des êtres vivants est son péché mignon.\nOn dit qu'il partage parfois ce précieux breuvage\navec ses congénères affamés.",
		es: "Le encanta chuparles la sangre a los seres\nvivos. En ocasiones comparte la preciada\ncolecta con otros congéneres hambrientos.",
		it: "Va matto per il sangue di altre creature. Si dice\nche a volte lo condivida con i compagni affamati.",
		de: "Das Blut anderer Lebewesen ist seine Leibspeise.\nMan sagt, dass es das abgesaugte Blut manchmal\nmit hungrigen Artgenossen teilt.",
		'pt-br': "Ama beber o sangue de outras criaturas. Dizem que,\nse encontra outros de sua espécie passando fome,\nàs vezes compartilha o sangue que recolheu.",
		ko: "살아 있는 생물의 혈액을 좋아한다.\n굶주린 동료에게 빨아들인 피를\n나눠주기도 한다고 한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			de: "Biss",
			'pt-br': "Mordida",
			ko: "물기"
		},

		damage: 30,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
