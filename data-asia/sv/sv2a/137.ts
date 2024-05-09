import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ポリゴン"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	dexId: [137],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "近年は 電脳空間で 大活躍。 怪しい データが ないか チェックして まわっている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "テクスチャー4"
		},

		effect: {
			ja: "の中からタイプを1つ選ぶ。このワザを受けたポケモンの弱点は、選んだタイプになる。この効果は、このワザを受けたポケモンがバトル場をはなれるまで続く。［弱点は「×2」でダメージ計算をする。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card