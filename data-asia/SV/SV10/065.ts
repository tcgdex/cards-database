import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>大嘴蝠",
		'zh-cn': "<火箭隊的>大嘴蝠",
		ja: "ロケット団のゴルバット"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "能以小小的腳靈巧地步行。 會無聲無息地靠近沉睡中的獵物， 用獠牙咬住對方並且吸食血液。",
		'zh-cn': "能以小小的腳靈巧地步行。 會無聲無息地靠近沉睡中的獵物， 用獠牙咬住對方並且吸食血液。",
		ja: "小さな 脚で 器用に 歩く。 寝ている 獲物に 忍びより キバを 突きたて 血を すするのだ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "暗中咬住",
			'zh-cn': "暗中咬住",
			ja: "こっそりかみつく"
		},

		effect: {
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。",
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン1匹に、ダメカンを2個のせる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "奇異之光",
			'zh-cn': "奇異之光",
			ja: "あやしいひかり"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。",
			ja: "相手のバトルポケモンをこんらんにする。"
		},

		damage: 30,
		cost: ["Darkness"]
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
	rarity: "Uncommon",
	dexId: [42]
}

export default card