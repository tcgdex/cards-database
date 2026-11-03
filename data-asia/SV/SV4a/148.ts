import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ホシガリス"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "None",
	category: "Pokemon",
	dexId: [819],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "どんなに お腹いっぱい 食べても また 腹ペコになるのが 不安で 頬と 尻尾に 木の実を 溜める。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "すあなにかくす"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札をすべてウラにして切り、山札の下にもどす。その後、山札を1枚引く。"
		}
	}],

	attacks: [{
		name: {
			ja: "かみつく"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
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
				cardmarket: 746530,
				tcgplayer: 567549,
				cardtrader: 269788,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577380,
			},
		},
	]
}

export default card
