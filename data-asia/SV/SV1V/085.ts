import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "パーモット"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [923],
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "ふわふわの 体毛が バッテリー。 電気自動車と 同じ 量の 電気を 蓄えることができる。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "でんきおこし"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "エレクトロパウ"
		},

		damage: 230,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0
}

export default card