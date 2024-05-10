import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "オムスター",
		'zh-tw': "多刺菊石獸"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [139],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "鋭いキバは 岩も 砕くが 触手の とどく 範囲の 獲物しか 襲えないのだ。",
		'zh-tw': "尖銳的牙齒足以咬碎岩石，但能夠襲擊的獵物僅限在 牠的觸手可及的範圍之內。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みかいのしょくしゅ",
			'zh-tw': "原始觸手"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、にげられない。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢無法撤退。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "アクアスプリット",
			'zh-tw': "水分岔"
		},

		damage: 90,

		effect: {
			ja: "相手のベンチポケモン2匹にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的2隻備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card