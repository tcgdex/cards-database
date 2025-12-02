import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",

	dexId: [42],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	evolveFrom: {
		en: "Zubat"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			de: "Flügelschlag",
			'pt-br': "Ataque de Asa",
			ko: "날개치기"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star",

	description: {
		en: "It loves to drink other creatures' blood. It's said that if it finds others of its kind going hungry, it sometimes shares the blood it's gathered.",
		fr: "Le sang des êtres vivants est son péché mignon.\nOn dit qu'il partage parfois ce précieux breuvage\navec ses congénères affamés.",
		es: "Le encanta chuparles la sangre a los seres\nvivos. En ocasiones comparte la preciada\ncolecta con otros congéneres hambrientos.",
		it: "Va matto per il sangue di altre creature. Si dice\nche a volte lo condivida con i compagni affamati.",
		de: "Das Blut anderer Lebewesen ist seine Leibspeise.\nMan sagt, dass es das abgesaugte Blut manchmal\nmit hungrigen Artgenossen teilt.",
		'pt-br': "Ama beber o sangue de outras criaturas. Dizem que,\nse encontra outros de sua espécie passando fome,\nàs vezes compartilha o sangue que recolheu.",
		ko: "살아 있는 생물의 혈액을 좋아한다.\n굶주린 동료에게 빨아들인 피를\n나눠주기도 한다고 한다."
	},

	boosters: ["mewtwo"]
}

export default card
