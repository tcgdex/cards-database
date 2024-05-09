import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "カモネギ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "miki kudo",
	dexId: [83],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "羽で もつ 茎を 刀のように 操り 敵を 切り捨てる。 いざと いうときは エサに する。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "でたとこせおい"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札から「ポケモンのどうぐ」を1枚選び、このポケモンにつける。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "おんそくぎり"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。"
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
