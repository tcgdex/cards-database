import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飄浮泡泡 雪雲的樣子"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "被冰雹打到時就會變成這個樣子。全身上下冷冰冰的，皮膚有一點結冰。"
	},

	stage: "Basic",

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
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card