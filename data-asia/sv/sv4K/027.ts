import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ラティオス"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [381],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "高い 知能を 持ち 人間の 言葉を 理解する。 争いを 嫌う 優しい ポケモンだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かっくう"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "ラスターパージ"
		},

		damage: 180,

		effect: {
			ja: "このポケモンについているエネルギーを3個選び、トラッシュする。"
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

	retreat: 1
}

export default card