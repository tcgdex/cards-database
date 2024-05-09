import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴーゴート"
	},

	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [673],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "ツノで 触れると 相手の 気持ちを 感じとれる。 ５０００年前から 人の 仕事を 手伝ってきた。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "つきあげる"
		},

		damage: "30＋",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "ソーラービーム"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card