import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騎拉帝納VSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "放逐衝擊"
		},

		effect: {
			'zh-tw': "選擇2個自己的場上寶可夢身上附加的能量，放置於放逐區。"
		},

		damage: 280,
		cost: ["Grass", "Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星安魂曲"
		},

		effect: {
			'zh-tw': "這個招式只有在自己的放逐區有10張以上的卡時才可使用。將對手的戰鬥寶可夢【氣絕】。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		cost: ["Grass", "Psychic"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card