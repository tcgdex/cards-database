import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 雙彈瓦斯"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "在往昔工廠林立、空氣嚴重污染的時代，雙彈瓦斯不知道為什麼變成了這個樣子。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "能量工廠"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的場上的，名稱中有「雙彈瓦斯」的寶可夢身上附加的基本【惡】能量，各視為提供2個【惡】能量。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "瓦斯包圍"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card