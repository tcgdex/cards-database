import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "月石"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "月亮的盈虧似乎會影響牠力量的增減。每到滿月之夜就會變得活躍。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "循環抽出"
		},

		effect: {
			'zh-tw': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出3張卡。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "月亮強念"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【超】能量的數量×30點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card