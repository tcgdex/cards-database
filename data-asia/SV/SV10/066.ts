import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>叉字蝠ex",
		'zh-cn': "<火箭隊的>叉字蝠ex",
		ja: "ロケット団のクロバットex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "亂咬",
			'zh-cn': "亂咬",
			ja: "かみつきまわる"
		},

		effect: {
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。在對手的2隻寶可夢身上各放置2個傷害指示物。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。在對手的2隻寶可夢身上各放置2個傷害指示物。",
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン2匹に、それぞれダメカンを2個のせる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "刺殺迴旋",
			'zh-cn': "刺殺迴旋",
			ja: "アサシンリターン"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢放回手牌。（寶可夢以外的卡全部丟棄。）",
			'zh-cn': "若希望，將這隻寶可夢放回手牌。（寶可夢以外的卡全部丟棄。）",
			ja: "のぞむなら、このポケモンを手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）"
		},

		damage: 120,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare"
}

export default card