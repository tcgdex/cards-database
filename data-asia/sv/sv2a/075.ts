import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴローン",
		'zh-tw': "隆隆石"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [75],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "崖を 転がり 移動する。 間違えて 川に 落ちると 最期の あがきで 大爆発。",
		'zh-tw': "藉著從山崖上滾落來移動。 如果不小心掉進河裡， 就會在最後掙扎時來個大爆炸。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "れんぞくいわなげ",
			'zh-tw': "連續投石"
		},

		damage: "40×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×40ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×40點傷害。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ヘビーインパクト",
			'zh-tw': "重磅衝擊"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card