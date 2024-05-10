import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤルキモノ",
		'zh-tw': "過動猿"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [288],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "体を 動かしていないと ストレスが 溜まりすぎて 具合が 悪くなってしまうのだ。",
		'zh-tw': "如果不活動身體，就會累積過多的壓力， 使身體狀況變糟。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "がちんこ",
			'zh-tw': "正面對決"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "するどいツメ",
			'zh-tw': "銳利之爪"
		},

		damage: "60+",

		effect: {
			ja: "コインを1回投げオモテなら、60ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加60點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card