import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "カイリキーV"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "リベンジバスター"
		},

		effect: {
			ja: "自分のベンチポケモンにダメカンがのっているなら、50ダメージ追加。"
		},

		damage: "50+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			ja: "ちきゅうなげ"
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
				cardmarket: 651315,
				tcgplayer: 569828,
				cardtrader: 234214,
			},
		},
	]
}

export default card
