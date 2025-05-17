import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		de: "Rexblisar",
		'pt-br': "Abomasnow",
		ko: "눈설왕"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Snover"
	},

	description: {
		en: "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
		fr: "Il vit paisiblement dans les massifs où s'amoncellent les neiges\néternelles, et il déclenche des blizzards pour se cacher.",
		es: "Vive en paz en cordilleras de nieves eternas.\nGenera ventiscas para ocultarse.",
		it: "Vive nella pace delle cime montuose tra le nevi\nperenni. Si nasconde scatenando bufere di neve.",
		de: "Es führt ein ruhiges Leben im Gebirge, wo\newiger Schnee liegt, und löst Blizzards aus,\num sich zu verstecken.",
		'pt-br': "Leva uma vida tranquila em montanhas que estão\npermanentemente cobertas de neve. Ele se esconde\nprovocando nevascas.",
		ko: "만년설이 쌓인 산맥에서 조용히 지낸다.\n블리자드를 발생시켜 모습을 감춘다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Frost Breath",
			fr: "Souffle Glacé",
			es: "Vaho Gélido",
			it: "Alitogelido",
			de: "Eisesodem",
			'pt-br': "Respiração de Gelo",
			ko: "얼음숨결"
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
