import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "アヤシシ"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	dexId: [899],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "目に見えぬ 壁を 作りしとき 黒き珠 妖しく 輝きたり。 抜け落ちし 髭は 暖かく 冬衣の 原料に 重宝す。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いそぎあし"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を1枚引く。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "じんつうりき"
		},

		damage: "40＋",

		effect: {
			ja: "自分の手札と相手の手札が同じ枚数なら、80ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card