import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "能夠反彈一切的攻擊，因此被稱為格鬥王之盾，受到人們的畏懼與尊崇。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "金屬盾牌"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有能量，則這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "報仇"
		},

		effect: {
			'zh-tw': "在上個對手的回合，若自己的寶可夢【氣絕】了，則增加120點傷害。"
		},

		damage: "100+",
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card