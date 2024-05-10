import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "パッチール",
		'zh-tw': "晃晃斑"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [327],
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "１匹ずつ ブチ模様は 異なる。 フラフラした 動きで 相手の 攻撃を 絶妙に かわすぞ。",
		'zh-tw': "每一隻身上的斑點都不一樣。會用搖搖晃晃的動作 巧妙地避開對手的攻擊。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ちどりあし",
			'zh-tw': "蹣跚"
		},

		effect: {
			ja: "このポケモンがこんらんなら、このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			'zh-tw': "若這隻寶可夢【混亂】，則這隻寶可夢受到招式的傷害時，自己擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "フラフラステップ",
			'zh-tw': "搖晃舞步"
		},

		damage: 100,

		effect: {
			ja: "このポケモンをこんらんにする。",
			'zh-tw': "將這隻寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card