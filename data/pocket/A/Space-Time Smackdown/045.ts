import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Abomasnow",
		'fr-fr': "Blizzaroi",
		'es-es': "Abomasnow",
		'it-it': "Abomasnow",
		'de-de': "Rexblisar",
		'pt-br': "Abomasnow",
		'ko-kr': "눈설왕"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [460],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Snover"
	},

	description: {
		'en-us': "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
		'fr-fr': "Il vit paisiblement dans les massifs où s'amoncellent les neiges\néternelles, et il déclenche des blizzards pour se cacher.",
		'es-es': "Vive en paz en cordilleras de nieves eternas.\nGenera ventiscas para ocultarse.",
		'it-it': "Vive nella pace delle cime montuose tra le nevi\nperenni. Si nasconde scatenando bufere di neve.",
		'de-de': "Es führt ein ruhiges Leben im Gebirge, wo\newiger Schnee liegt, und löst Blizzards aus,\num sich zu verstecken.",
		'pt-br': "Leva uma vida tranquila em montanhas que estão\npermanentemente cobertas de neve. Ele se esconde\nprovocando nevascas.",
		'ko-kr': "만년설이 쌓인 산맥에서 조용히 지낸다.\n블리자드를 발생시켜 모습을 감춘다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Frost Breath",
			'fr-fr': "Souffle Glacé",
			'es-es': "Vaho Gélido",
			'it-it': "Alitogelido",
			'de-de': "Eisesodem",
			'pt-br': "Respiração de Gelo",
			'ko-kr': "얼음숨결"
		},

		damage: 120,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["dialga", "palkia"]
}

export default card
