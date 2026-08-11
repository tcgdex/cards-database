import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉普拉斯"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "頭腦聰慧，心地善良的寶可夢。會一邊以優美的聲音歌唱，一邊暢游在大海之上。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水流清洗"
		},

		effect: {
			'zh-tw': "若希望，選擇2個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。"
		},

		damage: 70,
		cost: ["Water", "Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
