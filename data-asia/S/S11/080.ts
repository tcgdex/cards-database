import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騎拉帝納V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "深淵探求"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方4張卡，從其中選擇2張卡加入手牌。將剩餘卡放置於放逐區。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撕裂"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 160,
		cost: ["Grass", "Psychic", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card