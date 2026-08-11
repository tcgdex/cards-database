import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷鳥龍"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'zh-tw': "在遠古時代曾憑藉自己強大的下半身而所向無敵，但因吃光了賴以為生的植物而滅絕了。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "衝天電流"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢「衝天電流」的傷害「+90」點。"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "終極衝擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
