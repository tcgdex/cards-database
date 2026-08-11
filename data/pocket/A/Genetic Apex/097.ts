import { Card } from "models/database/card"
import Set from "../Genetic Apex"

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

	illustrator: "sowsow",
	category: "Pokemon",

	dexId: [81],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Lightning Ball",
			'fr-fr': "Boule Éclair",
			'es-es': "Bola Relámpago",
			'it-it': "Fulminpalla",
			'de-de': "Kugelblitz",
			'pt-br': "Bola de Raios",
			'ko-kr': "번쩍구슬"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.",
		'fr-fr': "Les ondes électromagnétiques émises par ses extrémités\nlui permettent de défier les lois de la gravité et de flotter.",
		'es-es': "Las unidades laterales crean ondas\nelectromagnéticas que contrarrestan\nla gravedad y le permiten flotar.",
		'it-it': "Le onde elettromagnetiche generate dagli\nelementi laterali neutralizzano la gravità\npermettendogli di levitare a mezz'aria.",
		'de-de': "Die seitlichen Module halten es in der Luft,\nindem sie mit elektromagnetischen Wellen\ndie Schwerkraft überlisten.",
		'pt-br': "As ondas eletromagnéticas emitidas pelas\nunidades nas laterais de sua cabeça geram\nantigravidade, o que faz com que ele possa flutuar.",
		'ko-kr': "좌우에 있는 유닛에서 나오는\n전자파를 이용해\n중력을 거슬러 하늘에 떠 있다."
	},

	boosters: ["pikachu"]
}

export default card
