import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤナッキー",
		'zh-tw': "花椰猿"
	},

	illustrator: "Kurata So",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [512],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "気性が 激しく トゲの ついた 尻尾を 振り回して 戦う。 頭の 葉っぱは とても 苦い。",
		'zh-tw': "性情凶暴，會猛烈地揮舞帶刺的尾巴戰鬥。 頭上的葉子非常苦。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "モンキートリオ",
			'zh-tw': "三猴行"
		},

		effect: {
			ja: "自分の場に「ヤナッキー」「バオッキー」「ヒヤッキー」がいるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
			'zh-tw': "若自己的場上有「花椰猿」「爆香猿」「冷水猿」，則這隻寶可夢使用招式所需的【無】能量全部消除。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "つっぱりニードル",
			'zh-tw': "猛推尖刺"
		},

		damage: 100,

		effect: {
			ja: "次の相手の番、このポケモンは特性を持つポケモン（「ヤナッキー」をのぞく）からワザのダメージを受けない。",
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到擁有特性的寶可夢（「花椰猿」除外）招式的傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card