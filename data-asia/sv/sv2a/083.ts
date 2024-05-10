import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カモネギ",
		'zh-tw': "大蔥鴨"
	},

	illustrator: "KG-2000",
	rarity: "Common",
	category: "Pokemon",
	dexId: [83],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "植物の 茎で 戦う。 茎の 振り方には いくつかの 流派の ようなものが ある。",
		'zh-tw': "用植物的莖來戰鬥。莖的揮舞方式存在著 好幾種不同的流派。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "しょってくる",
			'zh-tw': "背來"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		}
	}, {
		cost: ["Colorless"],

		name: {
			ja: "ネギでぶつ",
			'zh-tw': "用蔥毆打"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card