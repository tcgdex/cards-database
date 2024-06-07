import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "達克萊伊VSTAR",
		ja: "ダークライVSTAR"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "星星深淵"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。從自己的棄牌區選擇最多2張物品卡，在給對手看過後加入手牌。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "惡之波動",
			ja: "あくのはどう"
		},

		effect: {
			'zh-tw': "增加自己的場上寶可夢身上附加的【惡】能量的數量×30點傷害。",
			ja: "自分の場のポケモンについているエネルギーの数×30ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "スターアビス"
		},

		effect: {
			ja: "自分の番に使える。自分のトラッシュからグッズを2枚まで選び、相手に見せて、手札に加える。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card