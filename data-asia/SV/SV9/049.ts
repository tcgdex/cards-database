import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "レジロック",
		'zh-tw': "雷吉洛克",
		'zh-cn': "雷吉洛克"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [377],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "最新の 科学技術を 使い 岩の 体を 調べたが 脳や 心臓を 見つけられなかった。",
		'zh-tw': "有人利用最新的科學技術 調查了牠的岩石身體，但 卻找不到牠的大腦或心臟。",
		'zh-cn': "有人利用最新的科學技術 調查了牠的岩石身體，但 卻找不到牠的大腦或心臟。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "がんせきアーマー",
			'zh-tw': "岩石盔甲",
			'zh-cn': "岩石盔甲"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "若這隻寶可夢身上附有能量卡，則這隻寶可夢受到招式的傷害「-30」點。",
			'zh-cn': "若這隻寶可夢身上附有能量卡，則這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "バスターラリアット",
			'zh-tw': "毀壞者金勾臂",
			'zh-cn': "毀壞者金勾臂"
		},

		damage: 120,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。",
			'zh-cn': "這個招式的傷害不計算抵抗力。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card