import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロボン"
	},

	illustrator: "Kurata So",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [62],
	hp: 160,
	types: ["Water"],

	description: {
		ja: "泳ぎ だけでなく 格闘技も 得意。 鍛えあげた 腕から 豪快な パンチを 繰りだす。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "バブルこうせん"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ごうかいパンチ"
		},

		damage: "100＋",

		effect: {
			ja: "コインを1回投げオモテなら、150ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card