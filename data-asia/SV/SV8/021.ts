import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "グレンアルマ"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [936],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "エスパーと 炎の エネルギーで 強化された 鎧を まとう。 灼熱の 火の玉を 放つ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かえん"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "グレンブラスター"
		},

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のベンチポケモン1匹に、180ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card