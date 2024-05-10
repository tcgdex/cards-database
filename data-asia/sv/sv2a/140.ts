import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カブト",
		'zh-tw': "化石盔"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [140],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "絶滅したとも 言われるが 一部の 地域では けっこう 普通に 見かける らしい。",
		'zh-tw': "雖然有人說這種寶可夢已經滅絕，但牠在一部分 地區似乎是相當常見的。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ダブルひっかき",
			'zh-tw': "雙重抓"
		},

		damage: "70×",

		effect: {
			ja: "コインを2回投げ、オモテの数×70ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×70點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card