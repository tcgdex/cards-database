import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドードリオ"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [85],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "めったに 見つからない 珍種。 ３つの 頭は 喜び 悲しみ 怒りの 感情を 表す。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ばくそうドロー"
		},

		effect: {
			ja: "自分の番に1回使える。このポケモンにダメカンを1個のせる。その後、自分の山札を1枚引く。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "いかりのくちばし"
		},

		damage: "10＋",

		effect: {
			ja: "このポケモンにのっているダメカンの数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card