import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ホエルオー"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [321],
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		ja: "ホエルコ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "とっしん"
		},

		effect: {
			ja: "自分にも20ダメージ。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			ja: "なみのり"
		},

		damage: 70,
		cost: ["Water", "Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784506,
				tcgplayer: 613066,
				cardtrader: 138006,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784506,
				tcgplayer: 613066,
				cardtrader: 138006,
			},
		},
	]
}

export default card
