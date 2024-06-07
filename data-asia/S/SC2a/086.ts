import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 魔靈珊瑚V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "侵蝕氣場"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，每次對手從手牌將能量附於寶可夢身上時，在那隻寶可夢身上放置3個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "陰森飛彈"
		},

		effect: {
			'zh-tw': "將3個傷害指示物以任意方式放置於對手的備戰寶可夢身上。"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
