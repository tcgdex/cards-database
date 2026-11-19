import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ミュウツーex"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [150],
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "ex",

	attacks: [{
		name: {
			ja: "エネルギーきゅうしゅう"
		},

		effect: {
			ja: "自分のトラッシュからエネルギーを2枚まで選び出し、自分につける。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			ja: "サイコバーン"
		},

		damage: 60,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784510,
				tcgplayer: 613082,
				cardtrader: 138010,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784510,
				tcgplayer: 613082,
				cardtrader: 138010,
			},
		},
	]
}

export default card
