import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ジュカイン"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [254],
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		ja: "ジュプトル"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "とかげどく"
		},

		effect: {
			ja: "自分についているエネルギーが1個なら、相手をねむりにする。2個なら相手をどくにする。3個なら相手をどくとねむりにする。4個以上なら、相手をどくとやけどとねむりにする。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "ソーラービーム"
		},

		damage: 70,
		cost: ["Grass", "Grass", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Water",
		value: "-30"
	}],

	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784487,
				tcgplayer: 613063,
				cardtrader: 137987,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784487,
				tcgplayer: 613063,
				cardtrader: 137987,
			},
		},
	]
}

export default card
