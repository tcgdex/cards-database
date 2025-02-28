import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "メタング",
		'zh-tw': "金屬怪",
		'zh-cn': "金屬怪"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [375],
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "２匹の ダンバルが 合体した。 ２つの 脳みそが 連結したので サイコパワーは より 強くなった。",
		'zh-tw': "由２隻鐵啞鈴組合而成。 因為２個大腦互相連結， 所以精神力量變得更強了。",
		'zh-cn': "由２隻鐵啞鈴組合而成。 因為２個大腦互相連結， 所以精神力量變得更強了。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "サイコパンチ",
			'zh-tw': "精神拳",
			'zh-cn': "精神拳"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "しねんのずつき",
			'zh-tw': "意念頭錘",
			'zh-cn': "意念頭錘"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card