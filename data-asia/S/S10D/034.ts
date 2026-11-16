import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ウソッキー",
		'zh-tw': "樹才怪"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [185],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "樹木の素振りするも 幼子も 欺けず。 その体は 樹皮ならず 岩の手触り。 水を ひどく嫌う習性 特記に値す。",
		'zh-tw': "偽裝成樹木，卻連幼童也難以騙過。 體表並非樹皮，觸感彷若岩石。 值得一提的是，此寶可夢極其怕水。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "すたこらさっさ",
			'zh-tw': "速逃"
		},

		effect: {
			ja: "このポケモンにダメカンがのっているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則這隻寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			ja: "すてみタックル",
			'zh-tw': "捨身衝撞"
		},

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 90,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651002,
				tcgplayer: 569789,
				cardtrader: 234100,
			},
		},
	]
}

export default card