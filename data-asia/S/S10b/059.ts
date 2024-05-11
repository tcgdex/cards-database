import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "請假王V"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "習懶成癖"
		},

		effect: {
			'zh-tw': "若自己剩餘獎賞卡的張數為6張・4張・2張，則這隻寶可夢無法使用招式。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "重磅衝擊"
		},

		damage: 260,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card