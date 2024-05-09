import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "バンギラス"
	},

	illustrator: "hncl",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [248],
	hp: 180,
	types: ["Darkness"],

	description: {
		ja: "あたりの 地形を 変えるぐらい 朝飯前の 力持ち。 まわりを 気にしない ふてぶてしさ。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "けちらす"
		},

		damage: "30＋",

		effect: {
			ja: "相手のベンチポケモンの数×30ダメージ追加。"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "ドレッドマウンテン"
		},

		damage: 230,

		effect: {
			ja: "自分の山札を上から4枚トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card