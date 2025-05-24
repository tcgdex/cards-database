import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペパーのヨクバリス",
		'zh-tw': "<派帕的>藏飽栗鼠",
		'zh-cn': "<派帕的>藏飽栗鼠"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "None",
	category: "Pokemon",
	dexId: [820],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "木の実の 木を 見つけると たとえ 戦いの 最中であっても 一目散に 収穫に 行く。",
		'zh-tw': "只要發現長有樹果的樹， 即使是在對戰當中， 也會一溜煙地前去採集。",
		'zh-cn': "只要發現長有樹果的樹， 即使是在對戰當中， 也會一溜煙地前去採集。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "よくばりオーダー",
			'zh-tw': "貪慾點餐",
			'zh-cn': "貪慾點餐"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから「ペパーのサンドウィッチ」を2枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的棄牌區選擇最多2張「派帕的三明治」，在給對手看過後加入手牌。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的棄牌區選擇最多2張「派帕的三明治」，在給對手看過後加入手牌。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ころがりタックル",
			'zh-tw': "滾動衝撞",
			'zh-cn': "滾動衝撞"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card