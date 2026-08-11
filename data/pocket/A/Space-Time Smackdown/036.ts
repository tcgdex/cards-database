import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
		'es-es': "Prinplup",
		'it-it': "Prinplup",
		'de-de': "Pliprin",
		'pt-br': "Prinplup",
		'ko-kr': "팽태자"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [394],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Piplup"
	},

	description: {
		'en-us': "It lives alone, away from others. Apparently, every one of them believes it is the most important.",
		'fr-fr': "Il vit seul, à l'écart de ses pairs. Chaque individu\nest convaincu d'être meilleur que les autres.",
		'es-es': "Vive solo, alejado de los demás. Cada\nuno piensa que es el más importante.",
		'it-it': "Vive da solo lontano dagli altri. Apparentemente\nogni esemplare crede di essere il più importante.",
		'de-de': "Es lebt allein, entfernt von anderen. Jedes von\nihnen denkt, es sei das Bedeutendste unter ihnen.",
		'pt-br': "Vivem sozinhos, longe de todos. Pelo que parece,\ntodos eles se acham a última bolacha do pacote.",
		'ko-kr': "무리를 만들지 않고 혼자 생활한다.\n어떤 팽태자라도 자신이 제일\n훌륭하다고 생각하는 듯하다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'de-de': "Surfer",
			'pt-br': "Surfar",
			'ko-kr': "파도타기"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
