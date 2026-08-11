import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ギャロップ",
		'zh-tw': "烈焰馬",
		'zh-cn': "烈焰馬"
	},

	illustrator: "Rond",
	rarity: "None",
	category: "Pokemon",
	dexId: [78],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "いちばん 脚が 速い ものが リーダー。 群れが 行く 場所や 走る 速度を 決めている。",
		'zh-tw': "奔跑速度最快的烈焰馬 會成為首領，決定族群 前往的地點和奔跑速度。",
		'zh-cn': "奔跑速度最快的烈焰馬 會成為首領，決定族群 前往的地點和奔跑速度。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いそぎあし",
			'zh-tw': "快走",
			'zh-cn': "快走"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を1枚引く。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫抽出1張卡。",
			'zh-cn': "在自己的回合時可使用1次。從自己的牌庫抽出1張卡。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ほのおのたてがみ",
			'zh-tw': "火之鬃",
			'zh-cn': "火之鬃"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card