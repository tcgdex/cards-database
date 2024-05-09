import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ハブネーク"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [336],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "硬い 岩で 刀の 尻尾を 研ぐ。 しげみに 隠れて 獲物に 近寄り 毒の キバで 襲う。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "どくえき"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムショック"
		},

		damage: "60＋",

		effect: {
			ja: "相手のバトルポケモンがどくなら、120ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card