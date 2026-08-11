import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飯匙蛇"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "平時都用堅硬的岩石來打磨刀刃般的尾巴。會躲在樹叢裡， 然後趁獵物靠近時用毒牙襲擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "銳利之牙"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "揮擊"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加50點傷害。"
		},

		damage: "50+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card