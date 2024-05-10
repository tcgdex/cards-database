import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ギャラドス",
		'zh-tw': "暴鯉龍"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 190,
	types: ["Water"],

	description: {
		ja: "一度 姿を 現すと まわりを すべて 焼き尽くさないと 怒りが 鎮まらない という。",
		'zh-tw': "據說暴鯉龍一旦現身，如果不把周圍的一切都 燃燒殆盡，怒火就不會平息。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "あらくれもの",
			'zh-tw': "暴躁者"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、必ず1回使う。自分の山札を上から5枚トラッシュする。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，一定要使用1次。將自己的牌庫上方5張卡丟棄。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "はかいこうせん",
			'zh-tw': "破壞光線"
		},

		damage: 200,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card