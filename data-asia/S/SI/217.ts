import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 閃電鳥V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "鬥爭本能"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少對手的場上的「寶可夢【V】」的數量。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "雷鳴蹴擊"
		},

		effect: {
			'zh-tw': "在造成傷害前，選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。"
		},

		damage: 170,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card