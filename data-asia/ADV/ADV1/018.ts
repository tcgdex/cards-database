import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ペリッパー"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [279],
	hp: 70,
	types: ["Water"],

	evolveFrom: {
		ja: "キャモメ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "たくわえる"
		},

		effect: {
			ja: "次の自分の番、自分が使う「はきだす」または「のみこむ」のダメージは、「+40」される。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "はきだす"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			ja: "のみこむ"
		},

		effect: {
			ja: "相手に与えたダメージぶんのダメージカウンターを、自分からとりのぞく。"
		},

		damage: 20,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784502,
				tcgplayer: 613073,
				cardtrader: 138002,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784502,
				tcgplayer: 613073,
				cardtrader: 138002,
			},
		},
	]
}

export default card
