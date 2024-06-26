import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "桃歹郎ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "‌‌[特性]支配鎖鏈"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。選擇1隻自己的備戰區的【惡】寶可夢（「桃歹郎ex」除外），與戰鬥寶可夢互換。然後，將新的戰鬥寶可夢【中毒】。在這個回合，若已經使出了其他的「支配鎖鏈」，則這個特性無法使用。"
		}
	}, {
		name: {
			'zh-tw': "煩煩爆炸"
		},

		effect: {
			'zh-tw': "造成對手已經獲得的獎賞卡的張數×60點傷害。"
		},

		damage: "60×",
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card