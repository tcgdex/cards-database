import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "クヌギダマ",
		'zh-tw': "榛果球"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [204],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "口から 吐き出す 液体は 木の皮を つける 接着剤。 空気に 触れると 固まるのだ。",
		'zh-tw': "口中吐出的液體是牠用來貼上樹皮的膠水， 一接觸到空氣就會凝固。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ガードプレス",
			'zh-tw': "防守壓制"
		},

		damage: 10,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card