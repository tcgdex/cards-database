import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ワッカネズミ"
	},

	illustrator: "Oswaldo KATO",
	rarity: "None",
	category: "Pokemon",
	dexId: [924],
	hp: 30,
	types: ["Colorless"],

	description: {
		ja: "息の合った コンビネーションで 巣の 材料に なりそうなものを 前歯で 切り出して 運び去る。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "もってくる"
		},

		effect: {
			ja: "自分の山札を2枚引く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ひっぱたく"
		},

		damage: 30,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746534,
				tcgplayer: 567553,
				cardtrader: 269778,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577384,
			},
		},
	]
}

export default card
