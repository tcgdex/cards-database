import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狐大盜"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "會偷偷在看中的獵物身上留下標記，追蹤目標的氣味， 在對方放鬆警戒時偷盜。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "五里霧中"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為2張以下則生效。只要這隻寶可夢在場上，對手從手牌使出支援者時，自己的備戰區的所有「寶可夢【V】」不會受到其效果的影響。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "銳利之牙"
		},

		damage: 110,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card