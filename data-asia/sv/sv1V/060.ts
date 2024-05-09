import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ハピナス"
	},

	illustrator: "chibi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [242],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "ハピナスの 産む タマゴには 幸せが つまっていて ひとくち 食べると だれでも 笑顔になれる。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "せわやきナース"
		},

		effect: {
			ja: "自分の番に1回使える。自分のバトルポケモンの特殊状態を、すべて回復する。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハッピーサイクロン"
		},

		damage: 150,

		effect: {
			ja: "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card