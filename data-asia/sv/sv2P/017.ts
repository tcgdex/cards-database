import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "マリルリ"
	},

	illustrator: "En Morikura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [184],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "長い 耳は 優れた センサー。 水の中の 音を 聞き分けて なにが 動いているのか わかる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "バブルドレイン"
		},

		damage: 50,

		effect: {
			ja: "このポケモンのHPを「30」回復する。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "たたきつける"
		},

		damage: "100×",

		effect: {
			ja: "コインを2回投げ、オモテの数×100ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card