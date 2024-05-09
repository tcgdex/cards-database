import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ミロカロス"
	},

	illustrator: "Atsuya Uki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [350],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "ミロカロスの 美しい 姿を 見た 者は 荒んだ 心が 癒されると いわれている。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "たすけぶね"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。おたがいのプレイヤーは、それぞれ自分のトラッシュからたねポケモンを1枚選び、自分のベンチに出す。（ベンチに出すのは相手から行う。）"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "ヒプノスプラッシュ"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card