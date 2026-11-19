import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ボスゴドラ"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [306],
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		ja: "コドラ"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "しかえし"
		},

		effect: {
			ja: "コインを1回投げオモテなら、自分のダメージカウンター×10ダメージ。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}, {
		name: {
			ja: "メガトンパンチ"
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			ja: "ダブルラリアット"
		},

		effect: {
			ja: "コインを2回投げ、オモテ×70ダメージ。"
		},

		damage: "70×",
		cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784535,
				tcgplayer: 613053,
				cardtrader: 138035,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784535,
				tcgplayer: 613053,
				cardtrader: 138035,
			},
		},
	]
}

export default card
