import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "オンバーン",
		'zh-tw': "音波龍",
		'zh-cn': "音波龍"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [715],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "巨大な 岩石も 粉々に 砕く 超音波を 発する。 残忍な 性質の ポケモン。",
		'zh-tw': "會發出連巨大的岩石 都能碎成粉狀的超音波。 是性情殘忍的寶可夢。",
		'zh-cn': "會發出連巨大的岩石 都能碎成粉狀的超音波。 是性情殘忍的寶可夢。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "チューニングエコー",
			'zh-tw': "調諧迴響",
			'zh-cn': "調諧迴響"
		},

		effect: {
			ja: "自分の手札と相手の手札が同じ枚数なら、このポケモンが「パニックハウル」を使うためのエネルギーは、すべてなくなる。",
			'zh-tw': "若自己的手牌與對手的手牌張數相同，則這隻寶可夢使用「恐慌嚎鳴」所需的能量全部消除。",
			'zh-cn': "若自己的手牌與對手的手牌張數相同，則這隻寶可夢使用「恐慌嚎鳴」所需的能量全部消除。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "パニックハウル",
			'zh-tw': "恐慌嚎鳴",
			'zh-cn': "恐慌嚎鳴"
		},

		damage: 110,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card