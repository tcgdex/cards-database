import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土龍弟弟"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "這種寶可夢會用鑽頭般的尾巴向後挖掘地面，在地下深處製造形狀複雜的巢穴。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "最後一掘"
		},

		effect: {
			'zh-tw': "當這隻寶可夢受到對手的寶可夢招式的傷害而【氣絕】時，將對手的牌庫上方2張卡丟棄。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "衝撞"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
