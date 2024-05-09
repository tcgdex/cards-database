import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジュゴン"
	},

	illustrator: "aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [87],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "食事の 後は 砂浜で 日光浴を している。 体温を あげて 消化を よく するのだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "デュアルスプラッシュ"
		},

		effect: {
			ja: "相手のポケモン2匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "オーロラビーム"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card