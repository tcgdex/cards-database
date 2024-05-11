import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷克羅姆"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "用尾巴製造電能。將全身藏在雷雲裡，在合眾地區的上空飛行。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "場地粉碎"
		},

		effect: {
			'zh-tw': "將場上的對手的競技場卡丟棄。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "皎白雷電"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「萊希拉姆」，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card