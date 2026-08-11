import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊布V"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 190,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "呼喚"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出3張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "拍檔之勇"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card