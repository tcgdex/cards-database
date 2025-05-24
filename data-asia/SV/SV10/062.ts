import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>尼多力諾",
		'zh-cn': "<火箭隊的>尼多力諾",
		ja: "ロケット団のニドリーノ"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "神經質且容易發脾氣打架。 當體內的腎上腺素增加時， 毒素的濃度也會提升。",
		'zh-cn': "神經質且容易發脾氣打架。 當體內的腎上腺素增加時， 毒素的濃度也會提升。",
		ja: "神経質で 喧嘩っ早い。 体内の アドレナリンが 増えると 毒素の 濃度も 高まるぞ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "頭突",
			'zh-cn': "頭突",
			ja: "ぶちかます"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "角裂",
			'zh-cn': "角裂",
			ja: "つのでえぐる"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加60點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加60點傷害。",
			ja: "相手のバトルポケモンにダメカンがのっているなら、60ダメージ追加。"
		},

		damage: "60＋",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [33]
}

export default card