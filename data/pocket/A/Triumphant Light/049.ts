import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'it-it': "Golbat",
		'de-de': "Golbat",
		'pt-br': "Golbat",
		'ko-kr': "골뱃"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [42],
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Zubat"
	},

	description: {
		'en-us': "It loves to drink other creatures' blood. It's said that if it finds others of its kind going hungry, it sometimes shares the blood it's gathered.",
		'fr-fr': "Le sang des êtres vivants est son péché mignon.\nOn dit qu'il partage parfois ce précieux breuvage\navec ses congénères affamés.",
		'es-es': "Le encanta chuparles la sangre a los seres\nvivos. En ocasiones comparte la preciada\ncolecta con otros congéneres hambrientos.",
		'it-it': "Va matto per il sangue di altre creature. Si dice\nche a volte lo condivida con i compagni affamati.",
		'de-de': "Das Blut anderer Lebewesen ist seine Leibspeise.\nMan sagt, dass es das abgesaugte Blut manchmal\nmit hungrigen Artgenossen teilt.",
		'pt-br': "Ama beber o sangue de outras criaturas. Dizem que,\nse encontra outros de sua espécie passando fome,\nàs vezes compartilha o sangue que recolheu.",
		'ko-kr': "살아 있는 생물의 혈액을 좋아한다.\n굶주린 동료에게 빨아들인 피를\n나눠주기도 한다고 한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'de-de': "Biss",
			'pt-br': "Mordida",
			'ko-kr': "물기"
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
