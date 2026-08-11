import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天然雀"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'zh-tw': "能夠靈巧地跳上樹幹。喜歡在枝頭上啄食新長出來的嫩芽。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "小憩"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「20」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "啄"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
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