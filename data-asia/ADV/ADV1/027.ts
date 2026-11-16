import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ラルトス"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [280],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "はたく"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "リンクブラスト"
		},

		effect: {
			ja: "自分と相手のエネルギーの数が違うなら、このワザのダメージは「10」になる。"
		},

		damage: 40,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784511,
				tcgplayer: 613047,
				cardtrader: 138011,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784511,
				tcgplayer: 613047,
				cardtrader: 138011,
			},
		},
	]
}

export default card
