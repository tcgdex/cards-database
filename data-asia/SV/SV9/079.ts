import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ノココッチex",
		'zh-tw': "土龍節節ex",
		'zh-cn': "土龍節節ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぎゃっきょうテール",
			'zh-tw': "逆境之尾",
			'zh-cn': "逆境之尾"
		},

		damage: "60×",

		effect: {
			ja: "相手の場の「ポケモンex」の数×60ダメージ。",
			'zh-tw': "造成對手的場上的「寶可夢【ex】」的數量×60點傷害。",
			'zh-cn': "造成對手的場上的「寶可夢【ex】」的數量×60點傷害。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ドリルブレイク",
			'zh-tw': "鑽破壞",
			'zh-cn': "鑽破壞"
		},

		damage: 150,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			'zh-cn': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card