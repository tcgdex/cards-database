import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Diglett",
		fr: "Taupiqueur",
		es: "Diglett",
		it: "Diglett",
		de: "Digda",
		'pt-br': "Diglett",
		ko: "디그다"
	},

	illustrator: "Masako Yamashita",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			de: "Lehmschelle",
			'pt-br': "Tapa de Lama",
			ko: "진흙뿌리기"
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
		en: "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.",
		fr: "Ce Pokémon vit un mètre sous terre et se nourrit\nde racines. Il apparaît parfois à la surface.",
		es: "Vive 1 m por debajo del suelo, donde se alimenta\nde raíces. A veces también aparece en la superficie.",
		it: "Vive un metro sottoterra, dove si nutre\ndi radici. Talvolta compare in superficie.",
		de: "Dieses Pokémon lebt 1 m unter der\nErde. Es frisst Wurzeln und kommt\nhin und wieder an die Oberfläche.",
		'pt-br': "Vive cerca de 1 metro embaixo da terra,\nonde se alimenta de raízes de plantas.\nAlgumas vezes, são vistos acima da terra.",
		ko: "지하 1m 정도를 파고들어 가서\n나무뿌리 등을 씹어 먹고 산다.\n가끔 지상으로 얼굴을 내민다."
	}
}

export default card
