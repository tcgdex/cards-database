import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火焰鳥"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "每當牠拍動翅膀，羽毛就會閃爍出美麗的赤紅火焰。是傳說的鳥寶可夢之一。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "閃焰象徵"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的【火】屬性的【基礎】寶可夢（「火焰鳥」 除外）使用的招式，對對手的戰鬥寶可夢造成的傷害「+10」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "火焰之翼"
		},

		damage: 110,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card