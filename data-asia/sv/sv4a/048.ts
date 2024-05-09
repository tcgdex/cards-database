import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミガルーサ"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	dexId: [976],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "無駄な 肉を 捨て去ると 心が 研ぎ澄まされ サイコパワーが 上がる。 贅肉は 淡白だが 美味しい。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ぶつかる"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スリムスクリュー"
		},

		damage: 120,

		effect: {
			ja: "このワザは、自分の手札が1枚もないなら、エネルギー1個で使える。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card