import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ポリゴンZ",
		'zh-tw': "多邊獸Ｚ"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [474],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "追加 プログラムで 進化したと 言われるが ほんとうに 進化なのか 学会でも 意見が 分かれる。",
		'zh-tw': "據說是在追加程式後進化了，但牠的改變是否真的是進化，在學術界也是意見分歧。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "バグターボ",
			'zh-tw': "漏洞渦輪"
		},

		effect: {
			ja: "自分の番に1回使える。コインを1回投げオモテなら、自分のトラッシュから基本エネルギーを4枚まで選び、このポケモンにつける。ウラなら、このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "在自己的回合時可使用1次。擲1次硬幣若為正面，則從自己的棄牌區選擇最多4張基本能量卡，附於這隻寶可夢身上。若為反面，則選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "エナジーアタック",
			'zh-tw': "能量攻擊"
		},

		damage: "40×",

		effect: {
			ja: "このポケモンについているエネルギーの数×40ダメージ。",
			'zh-tw': "造成這隻寶可夢身上附加的能量的數量×40點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card