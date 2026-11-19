import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "レントラーV",
		'zh-tw': "倫琴貓V"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [405],
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "スナイプファング",
			'zh-tw': "狙擊獠牙"
		},

		effect: {
			ja: "相手の手札を見て、その中からトレーナーズを1枚選び、トラッシュする。",
			'zh-tw': "查看對手的手牌，選擇其中1張訓練家卡，將其丟棄。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "ラジエートパルス",
			'zh-tw': "發散脈衝"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個トラッシュし、相手のバトルポケモンをマヒにする。",
			'zh-tw': "將這隻寶可夢身上附加的2個能量丟棄，將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 650981,
				tcgplayer: 569776,
				cardtrader: 234087,
			},
		},
	]
}

export default card