import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風妖精"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "喜歡到處撒棉花搗蛋。沾水之後就會變重而動彈不得，只能聽天由命。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "三重抽出"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出3張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "快飛衝刺"
		},

		effect: {
			'zh-tw': "在造成傷害前，將自己的場上寶可夢身上附加的任意數量的「寶可夢道具」丟棄，增加其張數×40點傷害。"
		},

		damage: "10+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "D"
}

export default card