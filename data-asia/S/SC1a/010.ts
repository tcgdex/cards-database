import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勒克貓"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "在銳利的爪子尖端有強烈的電流流過，只要稍微擦到，就能讓對手暈厥。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "首發進場"
		},

		effect: {
			'zh-tw': "在自己的回合開始，從牌庫抽出了這張卡時，若自己的備戰區有空位，則在加入手牌前可使用1次。將這張卡放置於自己的備戰區。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "電氣踢"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card