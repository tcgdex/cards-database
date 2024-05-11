import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 火爆獸V",
		ja: "ヒスイ バクフーンV"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "灼熱",
			ja: "こがす"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}, {
		name: {
			'zh-tw': "戰慄火焰",
			ja: "せんりつのほのお"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，在看過那張卡正面後放回對手的牌庫並重洗。",
			ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card