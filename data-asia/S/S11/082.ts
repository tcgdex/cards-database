import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大比鳥V"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "消逝之翼"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次。將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "飛行衝浪"
		},

		effect: {
			'zh-tw': "若場上有自己的競技場卡，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card