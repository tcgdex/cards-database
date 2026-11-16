import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "カイリキーVMAX",
		'zh-tw': "怪力VMAX"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Triple Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 330,
	types: ["Fighting"],

	evolveFrom: {
		ja: "カイリキーV"
	},

	stage: "VMAX",

	attacks: [{
		name: {
			ja: "リベンジバスター",
			'zh-tw': "復仇光炮"
		},

		effect: {
			ja: "自分のベンチポケモンにダメカンがのっているなら、140ダメージ追加。",
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加140點傷害。"
		},

		damage: "80+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			ja: "キョダイシンゲキ",
			'zh-tw': "超極巨會心一擊"
		},

		effect: {
			ja: "次の自分の番、このポケモンは「キョダイシンゲキ」が使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「超極巨會心一擊」。"
		},

		damage: 240,
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
				cardmarket: 651001,
				tcgplayer: 569788,
				cardtrader: 234099,
			},
		},
	]
}

export default card