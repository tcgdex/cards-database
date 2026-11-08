import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'de-de': "Magnetilo",
		'pt-br': "Magnemite",
		'ko-kr': "코일"
	},

	illustrator: "Yukihiro Tada",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [81],
	hp: 60,
	types: ["Metal"],

	description: {
		'en-us': "The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.",
		'fr-fr': "Les ondes électromagnétiques émises par ses extrémités\nlui permettent de défier les lois de la gravité et de flotter.",
		'es-es': "Las unidades laterales crean ondas\nelectromagnéticas que contrarrestan\nla gravedad y le permiten flotar.",
		'it-it': "Le onde elettromagnetiche generate dagli\nelementi laterali neutralizzano la gravità\npermettendogli di levitare a mezz'aria.",
		'de-de': "Die seitlichen Module halten es in der Luft,\nindem sie mit elektromagnetischen Wellen\ndie Schwerkraft überlisten.",
		'pt-br': "As ondas eletromagnéticas emitidas pelas\nunidades nas laterais de sua cabeça geram\nantigravidade, o que faz com que ele possa flutuar.",
		'ko-kr': "좌우에 있는 유닛에서 나오는\n전자파를 이용해\n중력을 거슬러 하늘에 떠 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'de-de': "Tackle",
			'pt-br': "Investida",
			'ko-kr': "몸통박치기"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
