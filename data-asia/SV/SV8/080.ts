import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ムゲンダイナ",
		'zh-tw': "無極汰那",
		'zh-cn': "無極汰那"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [890],
	hp: 150,
	types: ["Dragon"],

	description: {
		ja: "胸の コアが ガラル地方の 大地から 涌きだす エネルギーを 吸収して 活動している。",
		'zh-tw': "會用胸部的核心吸收 伽勒爾的大地湧出的能量， 藉以保持自己的活力。",
		'zh-cn': "會用胸部的核心吸收 伽勒爾的大地湧出的能量， 藉以保持自己的活力。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ダイナブラスト",
			'zh-tw': "汰那爆破",
			'zh-cn': "汰那爆破"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex」なら、80ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】」，則增加80點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢為「寶可夢【ex】」，則增加80點傷害。"
		}
	}, {
		cost: ["Fire", "Darkness", "Darkness"],

		name: {
			ja: "ワールドエンド",
			'zh-tw': "世界之末",
			'zh-cn': "世界之末"
		},

		damage: 230,

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。トラッシュできないなら、このワザは失敗。",
			'zh-tw': "將場上的競技場卡丟棄。若無法丟棄，則這個招式失敗。",
			'zh-cn': "將場上的競技場卡丟棄。若無法丟棄，則這個招式失敗。"
		}
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card