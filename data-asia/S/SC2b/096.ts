import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 泥巴魚V"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "金屬皮膚"
		},

		effect: {
			'zh-tw': "這隻寶可夢的最大HP，隨這隻寶可夢身上附加的【鋼】能量每1個增加「20」。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "陷阱咬"
		},

		effect: {
			'zh-tw': "在下個對手的回合，當這隻寶可夢受到招式的傷害時，在使用招式的寶可夢身上放置12個傷害指示物。"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
