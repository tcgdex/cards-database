import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "羅絲雷朵",
		ja: "ロズレイド"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "會用馥郁芬芳的花香迷惑敵人，並用荊棘上 的鞭子猛力抽打對方。",
		ja: "かぐわしい 花の 香りで 相手を 惑わせ いばらの ムチで 激しく 打ちつける。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "毒之鞭",
			ja: "どくのムチ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			ja: "相手のバトルポケモンをどくにする。"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "刺殺薔薇",
			ja: "アサシンローズ"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢處於特殊狀態，則對手的1隻備戰寶可夢也受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のバトルポケモンが特殊状態なら、相手のベンチポケモン1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [407],

	thirdParty: {
		cardmarket: 609716
	}
}

export default card