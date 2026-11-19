import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "カイリキーVMAX"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Secret Rare",
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
			ja: "リベンジバスター"
		},

		effect: {
			ja: "自分のベンチポケモンにダメカンがのっているなら、140ダメージ追加。"
		},

		damage: "80+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			ja: "キョダイシンゲキ"
		},

		effect: {
			ja: "次の自分の番、このポケモンは「キョダイシンゲキ」が使えない。"
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
				cardmarket: 651323,
				tcgplayer: 569836,
				cardtrader: 234223,
			},
		},
	]
}

export default card
