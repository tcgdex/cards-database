import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "斗笠菇",
		ja: "キノガッサ"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "會撒出毒孢子，然後再讓因吸入孢子而痛苦不堪的 對手吃上一記重拳。",
		ja: "毒の 胞子を ばらまき 吸いこんで 苦しむ 相手に 強烈な パンチを くらわせる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "孢子彈",
			ja: "ほうしだま"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			ja: "相手のバトルポケモンをねむりにする。"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "粉塵衝天",
			ja: "ふんじんアッパー"
		},

		effect: {
			'zh-tw': "這個招式必須在上個自己的回合這隻寶可夢使用了「孢子彈」才可使用。",
			ja: "このワザは、前の自分の番に、このポケモンが「ほうしだま」を使っていなければ使えない。"
		},

		damage: 130,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [286],

	thirdParty: {
		cardmarket: 605855
	}
}

export default card