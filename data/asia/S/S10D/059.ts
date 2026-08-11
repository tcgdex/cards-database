import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詭角鹿V"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "開拓之路"
		},

		effect: {
			'zh-tw': "在自己的回合，當從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。選擇自己的場上寶可夢身上附加的任意數量的能量，改附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "屏障猛攻"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上附加的能量的數量×40點傷害。"
		},

		damage: "40×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card