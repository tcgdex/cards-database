import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "タマゲタケ"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [590],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "モンスターボールの 開発者は タマゲタケが 好きだったという 説が あるが 真偽は 不明。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "もようでつる"
		},

		effect: {
			ja: "自分の山札からタイプのたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "たたく"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card