import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>鈴鐺響",
		'zh-cn': "<火箭隊的>鈴鐺響",
		ja: "ロケット団のリーシャン"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		'zh-tw': "如果跳起來， 嘴裡的珠子就會到處反彈， 發出鈴鐺一般的音色。",
		'zh-cn': "如果跳起來， 嘴裡的珠子就會到處反彈， 發出鈴鐺一般的音色。",
		ja: "飛び跳ねると 口の中にある 玉が あちこちに 反射して 鈴のような 音色と なる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "鈴鈴吵鬧",
			'zh-cn': "鈴鈴吵鬧"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，將其丟棄。",
			'zh-cn': "在不看正面的情況下，從對手的手牌選擇1張，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [433],

	attacks: [{
		name: {
			ja: "リンリンさわぐ"
		},

		effect: {
			ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。"
		}
	}]
}

export default card