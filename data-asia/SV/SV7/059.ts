import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "好勝蟹",
		'zh-cn': "好勝蟹",
		ja: "マケンカニ"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "鉗子就算脫落也會馬上長回來。 其外殼可以萃取出美味的高湯， 是很有人氣的海鮮燉飯材料。",
		'zh-cn': "鉗子就算脫落也會馬上長回來。 其外殼可以萃取出美味的高湯， 是很有人氣的海鮮燉飯材料。",
		ja: "ハサミは もげても すぐに 生える。 カラから 良い 出汁が でるので パエリアの 具材として 人気。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "夾住",
			'zh-cn': "夾住",
			ja: "はさむ"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "蟹鉗錘",
			'zh-cn': "蟹鉗錘",
			ja: "クラブハンマー"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [739],

	thirdParty: {
		cardmarket: 779073
	}
}

export default card