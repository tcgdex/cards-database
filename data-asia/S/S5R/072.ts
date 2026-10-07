import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		ja: "ビクティニV"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [494],
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "Vバレット"
		},

		effect: {
			ja: "相手のバトルポケモンが「ポケモンV」なら、50ダメージ追加。"
		},

		damage: "10+",
		cost: ["Fire"]
	}, {
		name: {
			ja: "フレアシュート"
		},

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。"
		},

		damage: 120,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: {
			cardmarket: 538668, tcgplayer: 569113, cardtrader: 240083 } }
	]
}

export default card
