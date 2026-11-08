import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
		'es-es': "Electrode",
		'it-it': "Electrode",
		'de-de': "Lektrobal",
		'pt-br': "Electrode",
		'ko-kr': "붐볼"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",

	dexId: [101],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Voltorb"
	},

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'de-de': "Elektroball",
			'pt-br': "Bola Elétrica",
			'ko-kr': "일렉트릭볼"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0,
	rarity: "Two Diamond",

	description: {
		'en-us': "The more energy it charges up, the faster it gets. But this also makes it more likely to explode.",
		'fr-fr': "Plus il accumule de l'énergie de type Électrik, plus il est rapide.\nMais il a aussi davantage de chances d'exploser.",
		'es-es': "Cuanta más energía almacena, mayor\nvelocidad alcanza, aunque aumenta\ntambién el riesgo de que explote.",
		'it-it': "L'energia Elettro che immagazzina\nlo fa andare sempre più veloce, ma\nlo fa anche esplodere più facilmente.",
		'de-de': "Je mehr elektrische Energie es speichert, desto\nschneller ist es. Allerdings steigt dabei auch das\nRisiko, dass es explodiert.",
		'pt-br': "Quanto mais energia carrega, mais\nvelocidade ganha. Mas também aumenta\na sua probabilidade de explodir.",
		'ko-kr': "전기 에너지를 모을수록\n고속으로 이동할 수 있게 되나\n그만큼 폭발하기도 쉬워진다."
	},

	boosters: ["pikachu"]
}

export default card
