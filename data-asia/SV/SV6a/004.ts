import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "フクスロー"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [723],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "刃羽根 と 呼ばれる ナイフのような 羽根を 立て続けに 投げて 敵の 急所を 確実に つらぬく。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "だんけつのつばさ"
		},

		damage: "20×",

		effect: {
			ja: "自分のトラッシュにある、ワザ「だんけつのつばさ」を持つポケモンの枚数×20ダメージ。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "カッターウインド"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card