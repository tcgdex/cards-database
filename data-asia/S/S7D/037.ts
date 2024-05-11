import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鑰圈兒"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "過去棲息在礦山裡，因為作為食物的礦物逐漸減少，於是開始出現在人類的聚落中。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "解鎖"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card