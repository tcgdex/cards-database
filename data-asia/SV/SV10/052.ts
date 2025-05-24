import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大朝北鼻",
		'zh-cn': "大朝北鼻",
		ja: "ダイノーズ"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "會以磁力操縱３個 被稱為小朝北鼻的組件， 從３個方向解決對手。",
		'zh-cn': "會以磁力操縱３個 被稱為小朝北鼻的組件， 從３個方向解決對手。",
		ja: "３個の チビノーズと 呼ばれる ユニットを 磁力で 操り ３方向から 相手を 仕留める。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "力量寶石",
			'zh-cn': "力量寶石",
			ja: "パワージェム"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "山岳墜落",
			'zh-cn': "山岳墜落",
			ja: "マウンテンフォール"
		},

		effect: {
			'zh-tw': "若場上有競技場卡，則增加70點傷害。",
			'zh-cn': "若場上有競技場卡，則增加70點傷害。",
			ja: "場にスタジアムが出ているなら、70ダメージ追加。"
		},

		damage: "70＋",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [476]
}

export default card