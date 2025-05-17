import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gogoat",
		fr: "Chevroum",
		es: "Gogoat",
		it: "Gogoat",
		de: "Chevrumm",
		'pt-br': "Gogoat",
		ko: "고고트"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Skiddo"
	},


	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
			es: "Hoja Afilada",
			it: "Foglielama",
			de: "Rasierblatt",
			'pt-br': "Folha Navalha",
			ko: "잎날가르기"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It can sense the feelings of others by touching them with its horns. This species has assisted people with their work since 5,000 years ago.",
		fr: "Il peut ressentir les émotions de ses adversaires\nen les touchant avec ses cornes. Il aide les êtres\nhumains dans leurs travaux depuis 5 000 ans.",
		es: "Puede percibir cómo se siente alguien tocándolo\ncon los cuernos. Lleva ayudando a los humanos\nen sus labores desde hace 5000 años.",
		it: "Riesce a percepire lo stato d'animo di\nchiunque tocchi con le corna. Aiuta gli esseri\numani nelle loro attività da 5.000 anni.",
		de: "Berührt es sein Gegenüber mit den Hörnern, kann\nes dessen Gefühle erspüren. Seit 5000 Jahren\ngeht es den Menschen bei der Arbeit zur Hand.",
		'pt-br': "É capaz de saber o que os outros estão sentindo só\nde tocá-los com seus chifres. Esta espécie tem ajudado\nas pessoas com suas tarefas há mais de 5.000 anos.",
		ko: "뿔에 닿으면 상대의 기분을 느낄 수 있다.\n5천 년 전부터 인간의 일을 도왔다."
	}
}

export default card
