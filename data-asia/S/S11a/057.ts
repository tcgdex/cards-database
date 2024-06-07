import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "七夕青鳥"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "會一邊在天空中悠然飛翔，一邊哼唱出令人心醉神迷的美妙旋律。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "魔法迴響"
		},

		effect: {
			'zh-tw': "選擇自己的1隻備戰寶可夢，將所選的寶可夢身上放置的傷害指示物，全部改放於對手的戰鬥寶可夢身上。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "爆破之風"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
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