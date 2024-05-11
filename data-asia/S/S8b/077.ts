import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "謎擬ＱVMAX"
	},

	illustrator: "Studio Bora Inc.",
	category: "Pokemon",
	hp: 300,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "靈異數字"
		},

		effect: {
			'zh-tw': "將4個傷害指示物以任意方式放置於對手的寶可夢身上。在這個回合，若從自己的手牌使出了「阿塞蘿拉的預感」，則放置的傷害指示物的數量改為13個。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "極巨暗影"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。"
		},

		damage: 120,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card