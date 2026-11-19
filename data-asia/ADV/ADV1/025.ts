import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ライボルト"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [310],
	hp: 70,
	types: ["Lightning"],

	evolveFrom: {
		ja: "ラクライ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ゆうでん"
		},

		effect: {
			ja: "自分の山札から{L}エネルギーを1枚選び出し、自分のポケモンにつける。その後、その山札を切る。"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "でんげき"
		},

		effect: {
			ja: "コインを1回投げウラなら、自分にも10ダメージ。"
		},

		damage: 50,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-30"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784509,
				tcgplayer: 613061,
				cardtrader: 138009,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784509,
				tcgplayer: 613061,
				cardtrader: 138009,
			},
		},
	]
}

export default card
