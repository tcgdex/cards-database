import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "フワライド",
		'zh-tw': "隨風球"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	dexId: [426],
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		ja: "フワンテ"
	},

	description: {
		ja: "無念の 死を とげた 魂が 集まった 姿とも いわれる。 宵闇を 音も なく 漂う。",
		'zh-tw': "也有人說牠是萬念俱灰的靈魂聚在一起的樣子。 會在黑夜裡靜靜地飄盪。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "スプーキーバルーン",
			'zh-tw': "鬼怪氣球"
		},

		effect: {
			ja: "相手のベンチポケモン1匹に、ダメカンを2個のせる。",
			'zh-tw': "在對手的1隻備戰寶可夢身上放置2個傷害指示物。"
		},

		damage: 50,
		cost: ["Psychic"]
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
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650990,
				tcgplayer: 569782,
				cardtrader: 234093,
			},
		},
	]
}

export default card