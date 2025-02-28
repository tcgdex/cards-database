import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ジュペッタ",
		'zh-tw': "詛咒娃娃",
		'zh-cn': "詛咒娃娃"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [354],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "捨てられた ぬいぐるみに 怨念が 溜まって ポケモンになった。 薄暗い 路地裏で 見かける。",
		'zh-tw': "怨念積存在被丟棄的 布偶裡而變成了寶可夢。 可以在昏暗的巷子裡發現牠。",
		'zh-cn': "怨念積存在被丟棄的 布偶裡而變成了寶可夢。 可以在昏暗的巷子裡發現牠。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "のろいのことば",
			'zh-tw': "詛咒言語",
			'zh-cn': "詛咒言語"
		},

		effect: {
			ja: "相手は相手自身の手札を3枚選び、山札にもどして切る。",
			'zh-tw': "對手選擇3張對手自己的手牌，放回牌庫並重洗。",
			'zh-cn': "對手選擇3張對手自己的手牌，放回牌庫並重洗。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ホロウショット",
			'zh-tw': "陰森射擊",
			'zh-cn': "陰森射擊"
		},

		damage: 70
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
	regulationMark: "I"
}

export default card