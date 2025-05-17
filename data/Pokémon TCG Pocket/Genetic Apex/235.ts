import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Electrode",
		fr: "Électrode",
		es: "Electrode",
		it: "Electrode",
		de: "Lektrobal",
		'pt-br': "Electrode",
		ko: "붐볼"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		en: "Voltorb"
	},

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			es: "Bola Voltio",
			it: "Energisfera",
			de: "Elektroball",
			'pt-br': "Bola Elétrica",
			ko: "일렉트릭볼"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0,
	rarity: "One Star",

	description: {
		en: "The more energy it charges up, the faster it gets. But this also makes it more likely to explode.",
		fr: "Plus il accumule de l'énergie de type Électrik, plus il est rapide.\nMais il a aussi davantage de chances d'exploser.",
		es: "Cuanta más energía almacena, mayor\nvelocidad alcanza, aunque aumenta\ntambién el riesgo de que explote.",
		it: "L'energia Elettro che immagazzina\nlo fa andare sempre più veloce, ma\nlo fa anche esplodere più facilmente.",
		de: "Je mehr elektrische Energie es speichert, desto\nschneller ist es. Allerdings steigt dabei auch das\nRisiko, dass es explodiert.",
		'pt-br': "Quanto mais energia carrega, mais\nvelocidade ganha. Mas também aumenta\na sua probabilidade de explodir.",
		ko: "전기 에너지를 모을수록\n고속으로 이동할 수 있게 되나\n그만큼 폭발하기도 쉬워진다."
	},

	boosters: ["pikachu"]
}

export default card
