import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "デスカーン",
		'zh-tw': "死神棺",
		'zh-cn': "死神棺"
	},

	illustrator: "Shiburingaru",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [563],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "ピカピカの 黄金の 体。 もはや 人間だった ことは 思い出すことは ないと いう。",
		'zh-tw': "擁有閃亮亮的黃金身軀。 據說牠已再也無法記起 自己曾經是人類。",
		'zh-cn': "擁有閃亮亮的黃金身軀。 據說牠已再也無法記起 自己曾經是人類。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "めいふのおきて",
			'zh-tw': "冥府之律",
			'zh-cn': "冥府之律"
		},

		effect: {
			ja: "おたがいの特性を持つポケモン全員に、それぞれダメカンを6個のせる。",
			'zh-tw': "在雙方的所有擁有特性的寶可夢身上，各放置6個傷害指示物。",
			'zh-cn': "在雙方的所有擁有特性的寶可夢身上，各放置6個傷害指示物。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ホロウショット",
			'zh-tw': "陰森射擊",
			'zh-cn': "陰森射擊"
		},

		damage: 100
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
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793486
	}
}

export default card