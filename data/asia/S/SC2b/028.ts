import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電龍"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		'zh-tw': "從宇宙中也能看到電龍的燈光。以前的人們會利用電龍的燈光來和遠處的夥伴互相傳遞信號。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "閃光彈"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 50,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "雷電球"
		},

		damage: 130,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
