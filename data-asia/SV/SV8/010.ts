import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "チオンジェン"
	},

	illustrator: "danciao",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1001],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "草木の エネルギーを 吸い上げる。 周囲の 森は たちどころに 枯れ果て 田畑は 不作となる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "グリードハザード"
		},

		damage: 20,

		effect: {
			ja: "自分の山札の残り枚数が3枚以下なら、相手のベンチポケモン2匹にも、それぞれ120ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "まきこみウィップ"
		},

		damage: 130,

		effect: {
			ja: "自分の山札を上から3枚トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card