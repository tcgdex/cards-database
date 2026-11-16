import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "カイリキーV",
		'zh-tw': "怪力V"
	},

	illustrator: "kawayoo",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [68],
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "リベンジバスター",
			'zh-tw': "復仇光炮"
		},

		effect: {
			ja: "自分のベンチポケモンにダメカンがのっているなら、50ダメージ追加。",
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加50點傷害。"
		},

		damage: "50+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			ja: "ちきゅうなげ",
			'zh-tw': "地球上投"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651000,
				tcgplayer: 569787,
				cardtrader: 234098,
			},
		},
	]
}

export default card