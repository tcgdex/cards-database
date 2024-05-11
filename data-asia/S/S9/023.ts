import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍蝦小兵",
		ja: "ヘイガニ"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "有著頑強生命力的寶可夢。不論河裡的水有多髒 都能適應並繁衍後代。",
		ja: "どんなに 水が 汚れた 川でも 適応して 増えていく タフな 生命力の 持ち主。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水槍",
			ja: "みずでっぽう"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "蟹鉗錘",
			ja: "クラブハンマー"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [341]
}

export default card