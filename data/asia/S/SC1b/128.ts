import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "摔角鷹人"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "利用發揮輕盈體型優勢的戰法，在消耗了對手的體力之後使用華麗的絕招分出勝負。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "風幡"
		},

		effect: {
			'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出5張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "高速攻擊"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
