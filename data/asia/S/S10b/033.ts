import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天然鳥"
	},

	illustrator: "Hataya",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "人們相信牠之所以幾乎不動也不叫地靜靜待著，是因為牠正注視著過去和未來。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "精刺波"
		},

		effect: {
			'zh-tw': "對手的1隻「寶可夢【V】」受到90點傷害。這個招式的傷害不計算弱點・抵抗力。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "精神歪曲"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 50,
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

	retreat: 0,
	regulationMark: "F"
}

export default card