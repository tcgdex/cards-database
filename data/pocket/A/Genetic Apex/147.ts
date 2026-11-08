import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou",
		'es-es': "Geodude",
		'it-it': "Geodude",
		'de-de': "Kleinstein",
		'pt-br': "Geodude",
		'ko-kr': "꼬마돌"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",

	dexId: [74],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'de-de': "Tackle",
			'pt-br': "Investida",
			'ko-kr': "몸통박치기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		'en-us': "Geodude that have lived a long life have had all their edges smoothed out until they're totally round. They also have a calm, quiet disposition.",
		'fr-fr': "Les aspérités de Racaillou s'adoucissent au fil\ndes années, tout comme sa personnalité.\nIl devient tout lisse, tout rond, et tout calme.",
		'es-es': "Con la edad, su temperamento se amansa\ny su cuerpo se va alisando hasta adquirir\nuna forma completamente redonda.",
		'it-it': "Col passare degli anni le asperità del suo corpo\nvengono levigate, rendendolo perfettamente\nrotondo, e il suo carattere si fa più tranquillo.",
		'de-de': "Mit dem Alter verliert es zunehmend seine\nKantigkeit, bis es vollkommen rund und auch\ncharakterlich immer ausgeglichener wird.",
		'pt-br': "Geodude que já viveram muito são completamente\nredondos, porque todas as irregularidades foram polidas\npelo tempo. Sua natureza também se torna calma e tranquila.",
		'ko-kr': "오래 산 꼬마돌은 모가 없이\n동그랗다. 성격도 매우\n차분하고 온화하다."
	},

	boosters: ["pikachu"]
}

export default card
