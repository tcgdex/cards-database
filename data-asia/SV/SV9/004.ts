import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "パラス",
		'zh-tw': "派拉斯",
		'zh-cn': "派拉斯"
	},

	illustrator: "Ayako Ozaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [46],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "穴を 掘り 木の根っこから 栄養を 取るが ほとんどは 背中の キノコに 奪われる。",
		'zh-tw': "會挖洞從樹根處獲取營養， 不過其中的絕大部分 都會被背上的蘑菇奪走。",
		'zh-cn': "會挖洞從樹根處獲取營養， 不過其中的絕大部分 都會被背上的蘑菇奪走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "きゅうけつ",
			'zh-tw': "吸血",
			'zh-cn': "吸血"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			'zh-tw': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。",
			'zh-cn': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card