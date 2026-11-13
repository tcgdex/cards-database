import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴースト"
	},

	illustrator: "Arai Kiriko",
	rarity: "None",
	category: "Pokemon",
	dexId: [93],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		ja: "ゴース"
	},

	description: {
		ja: "暗闇にまぎれ ガスの手を 伸ばし 人の肩を 叩くのが 好き。 触られると 震えが 止まらない。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ホロウショット"
		},

		damage: 40,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 846839,
				tcgplayer: 654108,
				cardtrader: 345811,
			},
		},
	]
}

export default card
