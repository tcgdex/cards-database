import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏飽栗鼠"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "無論多麼堅硬的樹果殼都能用引以為傲的大牙咬碎。在伽勒爾是很常見的寶可夢。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "不甩人尾"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的寶可夢身上附加的能量，不會受到對手的物品或者支援者的效果影響而丟棄與放回手牌或牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card