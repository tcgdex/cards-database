import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゲンガー"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [94],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "命を 奪おうと 決めた 獲物の 影に 潜り込み じっと チャンスを 狙ってる。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ポルターガイスト"
		},

		damage: "50×",

		effect: {
			ja: "相手の手札を見て、その中にあるトレーナーズの枚数×50ダメージ。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ホロウダイブ"
		},

		damage: 110,

		effect: {
			ja: "ダメカン3個を、相手のベンチポケモンに好きなようにのせる。"
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

	retreat: 0
}

export default card