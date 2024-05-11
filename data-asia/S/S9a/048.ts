import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠　萬針魚"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "身上如同槍尖般的針以及凶暴的性情使這種寶可夢得到了海鬼的外號。 會吞下毒物作為己身糧食。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劇痛毒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為5個。"
		}
	}, {
		name: {
			'zh-tw': "針刺刑"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card