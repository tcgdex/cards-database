import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ライボルト",
		'zh-tw': "雷電獸",
		'zh-cn': "雷電獸"
	},

	illustrator: "Izucch",
	rarity: "Common",
	category: "Pokemon",
	dexId: [310],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "人前には めったに 姿を 見せない。 雷の 落ちた 場所に すみかが あると いう。",
		'zh-tw': "極少在人們面前現身， 據說牠的住所就在 雷電落下的地方。",
		'zh-cn': "極少在人們面前現身， 據說牠的住所就在 雷電落下的地方。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "エレキック",
			'zh-tw': "電氣踢",
			'zh-cn': "電氣踢"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "フラッシュインパクト",
			'zh-tw': "閃光衝擊",
			'zh-cn': "閃光衝擊"
		},

		damage: 120,

		effect: {
			ja: "自分のベンチポケモン1匹にも、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的1隻備戰寶可夢也受到40點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "自己的1隻備戰寶可夢也受到40點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card