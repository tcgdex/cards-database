import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ナマケロ",
		'zh-tw': "懶人獺",
		'zh-cn': "懶人獺"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	dexId: [287],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "ナマケロの 怠けた 様子は 見ている 人の 怠け心を 存分に 刺激するのだ。",
		'zh-tw': "懶人獺慵懶的樣子 會深深地刺激 看著牠的人的懶惰之心。",
		'zh-cn': "懶人獺慵懶的樣子 會深深地刺激 看著牠的人的懶惰之心。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "のんびりする",
			'zh-tw': "悠哉",
			'zh-cn': "悠哉"
		},

		effect: {
			ja: "このポケモンのHPを「60」回復する。次の自分の番、このポケモンはにげられない。",
			'zh-tw': "將這隻寶可夢恢復「60」HP。在下個自己的回合，這隻寶可夢無法撤退。",
			'zh-cn': "將這隻寶可夢恢復「60」HP。在下個自己的回合，這隻寶可夢無法撤退。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793516
	}
}

export default card