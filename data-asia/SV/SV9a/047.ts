import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペパーのノノクラゲ",
		'zh-tw': "<派帕的>原野水母",
		'zh-cn': "<派帕的>原野水母"
	},

	illustrator: "Fujimoto Gold",
	rarity: "Common",
	category: "Pokemon",
	dexId: [948],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "じめじめした 森の中で 暮らす。 剥がれ落ちた 体の ヒラヒラは 歯ごたえがあって とても 美味しい。",
		'zh-tw': "棲息在潮濕的森林裡。 從身體上剝落的薄片 富有嚼勁，極為美味。",
		'zh-cn': "棲息在潮濕的森林裡。 從身體上剝落的薄片 富有嚼勁，極為美味。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ちょっとつっこむ",
			'zh-tw': "撞一下",
			'zh-cn': "撞一下"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'zh-cn': "這隻寶可夢也受到10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card