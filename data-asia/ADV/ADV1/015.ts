import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "アズマオウ"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [119],
	hp: 70,
	types: ["Water"],

	evolveFrom: {
		ja: "トサキント"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ウォーターアロー"
		},

		effect: {
			ja: "相手のポケモン1匹に、20ダメージ。"
		},

		cost: ["Water"]
	}, {
		name: {
			ja: "スピードウォーター"
		},

		effect: {
			ja: "相手のエネルギーを1個選び、相手の別のバトルポケモンにつけ替える。(相手のバトルポケモンが1匹なら、この効果はなくなる。)"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 0,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784499,
				tcgplayer: 613074,
				cardtrader: 137999,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784499,
				tcgplayer: 613074,
				cardtrader: 137999,
			},
		},
	]
}

export default card
