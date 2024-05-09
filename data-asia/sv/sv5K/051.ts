import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "トドロクツキ"
	},

	illustrator: "hncl",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1005],
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "謎の 多い 探検記の中で トドロクツキという 名で 記された 生物の 可能性が ある。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "あだうちやばね"
		},

		damage: "70＋",

		effect: {
			ja: "自分のトラッシュにある「古代」のカードの枚数×10ダメージ追加。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スピードウイング"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card