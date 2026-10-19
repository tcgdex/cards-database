import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "シャンデラ"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [609],
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		ja: "ランプラー"
	},

	description: {
		ja: "怪しげな 炎で 燃やされた 魂は 行き場を なくし この 世を 永遠に さまよう。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フレアナビゲート"
		},

		effect: {
			ja: "自分の山札から[炎]エネルギーを1枚選び、自分のポケモンにつける。その後、つけたポケモンにダメカンを1個のせる。そして山札を切る。この特性は、自分の番に1回使える。"
		}
	}],

	attacks: [{
		name: {
			ja: "いのちをすいとる"
		},

		effect: {
			ja: "このポケモンのHPを「30」回復する。"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567848, tcgplayer: 602228, cardtrader: 142984 }, stamp: ["1st-edition"] }
	]
}

export default card
