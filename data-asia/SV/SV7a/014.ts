import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "湧躍鴨",
		'zh-cn': "湧躍鴨",
		ja: "ウェルカモ"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "個性勤奮，會觀察各地區的 人和寶可夢，並將其動作 融入自己的舞蹈裡。",
		'zh-cn': "個性勤奮，會觀察各地區的 人和寶可夢，並將其動作 融入自己的舞蹈裡。",
		ja: "様々な 地方の ポケモンや 人の 動きを 見て 自らの 踊りに 取り入れる 努力家。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "水之刀鋒",
			'zh-cn': "水之刀鋒",
			ja: "アクアエッジ"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [913]
}

export default card