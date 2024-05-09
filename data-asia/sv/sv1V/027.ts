import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "レアコイル"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [82],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "連結した タイプの コイルは 太陽の 黒点が 多いとき たくさん 現れると 言われる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ピッカリだま"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "だいばくはつ"
		},

		damage: 90,

		effect: {
			ja: "このポケモンにも90ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card