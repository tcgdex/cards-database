import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "バンギラス"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	dexId: [248],
	hp: 180,
	types: ["Darkness"],

	description: {
		'ja-jp': "あたりの 地形を 変えるぐらい 朝飯前の 力持ち。 まわりを 気にしない ふてぶてしさ。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "けちらす"
		},

		damage: "30＋",

		effect: {
			'ja-jp': "相手のベンチポケモンの数×30ダメージ追加。"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'ja-jp': "ドレッドマウンテン"
		},

		damage: 230,

		effect: {
			'ja-jp': "自分の山札を上から4枚トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707675,
				tcgplayer: 565941,
			},
		},
	],

	retreat: 3,
}

export default card