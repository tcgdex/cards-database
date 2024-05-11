import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑魯加"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "特徵是令人不寒而慄的長嚎。 過去人們認為牠是來自 地獄的使者，對牠十分畏懼。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "一擊咆哮"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇1張「一擊能量」卡，附於自己的「一擊」寶可夢身上。並且重洗牌庫。然後，在附上那張卡的寶可夢身上放置2個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暗之牙"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card