import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "キルリア"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [281],
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		ja: "ラルトス"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "げんわくダンス"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモン全員を、それぞれこんらんにする。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ライフダウン"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手の残りHPが「10」になるように、相手にダメージカウンターをのせる。"
		},

		cost: ["Psychic"]
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
				cardmarket: 784512,
				tcgplayer: 613069,
				cardtrader: 138012,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784512,
				tcgplayer: 613069,
				cardtrader: 138012,
			},
		},
	]
}

export default card
