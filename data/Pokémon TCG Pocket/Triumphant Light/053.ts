import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Magnemite",
		fr: "Magnéti",
		es: "Magnemite",
		it: "Magnemite",
		de: "Magnetilo",
		'pt-br': "Magnemite",
		ko: "코일"
	},

	illustrator: "OKACHEKE",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [81],
	hp: 60,
	types: ["Metal"],

	description: {
		en: "The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.",
		fr: "Les ondes électromagnétiques émises par ses extrémités\nlui permettent de défier les lois de la gravité et de flotter.",
		es: "Las unidades laterales crean ondas\nelectromagnéticas que contrarrestan\nla gravedad y le permiten flotar.",
		it: "Le onde elettromagnetiche generate dagli\nelementi laterali neutralizzano la gravità\npermettendogli di levitare a mezz'aria.",
		de: "Die seitlichen Module halten es in der Luft,\nindem sie mit elektromagnetischen Wellen\ndie Schwerkraft überlisten.",
		'pt-br': "As ondas eletromagnéticas emitidas pelas\nunidades nas laterais de sua cabeça geram\nantigravidade, o que faz com que ele possa flutuar.",
		ko: "좌우에 있는 유닛에서 나오는\n전자파를 이용해\n중력을 거슬러 하늘에 떠 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			de: "Tackle",
			'pt-br': "Investida",
			ko: "몸통박치기"
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
