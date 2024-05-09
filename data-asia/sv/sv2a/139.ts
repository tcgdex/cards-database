import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "オムスター"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [139],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "鋭いキバは 岩も 砕くが 触手の とどく 範囲の 獲物しか 襲えないのだ。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みかいのしょくしゅ"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、にげられない。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "アクアスプリット"
		},

		damage: 90,

		effect: {
			ja: "相手のベンチポケモン2匹にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card