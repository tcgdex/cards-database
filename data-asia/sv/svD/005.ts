import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "敗露球菇"
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "小心牠噴出的毒孢子。因為被噴到的地方會長出蘑菇， 形狀像是敗露球菇的菌傘。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "險惡孢子"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【中毒】與【麻痺】。"
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card