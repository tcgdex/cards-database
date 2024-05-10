import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ケーシィ",
		'zh-tw': "凱西"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Kariya",
	dexId: [63],
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "寝ながら 超能力を 操る。 夢の 内容が 使う 力に 影響する。",
		'zh-tw': "會一邊睡覺一邊操控超能力。 夢的內容會影響牠使用的能力。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "テレポーター",
			'zh-tw': "瞬間移動者"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。"
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ビーム",
			'zh-tw': "光束"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
