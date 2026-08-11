import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
		'es-es': "Diglett",
		'it-it': "Diglett",
		'de-de': "Digda",
		'pt-br': "Diglett",
		'ko-kr': "디그다"
	},

	illustrator: "Masako Yamashita",
	category: "Pokemon",

	dexId: [50],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'de-de': "Lehmschelle",
			'pt-br': "Tapa de Lama",
			'ko-kr': "진흙뿌리기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.",
		'fr-fr': "Ce Pokémon vit un mètre sous terre et se nourrit\nde racines. Il apparaît parfois à la surface.",
		'es-es': "Vive 1 m por debajo del suelo, donde se alimenta\nde raíces. A veces también aparece en la superficie.",
		'it-it': "Vive un metro sottoterra, dove si nutre\ndi radici. Talvolta compare in superficie.",
		'de-de': "Dieses Pokémon lebt 1 m unter der\nErde. Es frisst Wurzeln und kommt\nhin und wieder an die Oberfläche.",
		'pt-br': "Vive cerca de 1 metro embaixo da terra,\nonde se alimenta de raízes de plantas.\nAlgumas vezes, são vistos acima da terra.",
		'ko-kr': "지하 1m 정도를 파고들어 가서\n나무뿌리 등을 씹어 먹고 산다.\n가끔 지상으로 얼굴을 내민다."
	},

	boosters: ["pikachu"]
}

export default card
