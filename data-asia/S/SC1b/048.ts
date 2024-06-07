import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水晶燈火靈"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "住在古老的洋樓裡。詭異地搖晃手臂上的火焰，以此來催眠對手。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "守護之燈火"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有能量的寶可夢的弱點全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "幻想閃焰"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 110,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
