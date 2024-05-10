import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "エレザード",
		'zh-tw': "光電傘蜥"
	},

	illustrator: "Atsuya Uki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [695],
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "かつて 滅びた 砂漠の 国で 大事に されていた。 財宝と ともに ガラル地方へ やってきた。",
		'zh-tw': "在如今已滅亡的沙漠之國曾經是人們珍視的對象。 和財寶一起來到了伽勒爾地區。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ワイルドボルト",
			'zh-tw': "瘋狂伏特"
		},

		damage: 70,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card