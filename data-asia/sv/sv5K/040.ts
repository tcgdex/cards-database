import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "トロッゴン"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [838],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "感情が 昂ると 体内の 温度が 上昇。 炎を 吹きながら 忙しなく 走る。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "はねとばす"
		},

		damage: "20＋",

		effect: {
			ja: "コインを1回投げオモテなら、40ダメージ追加。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ロックスマッシュ"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card