import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "モトトカゲ"
	},

	illustrator: "GIDORA",
	rarity: "None",
	category: "Pokemon",
	dexId: [967],
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "大昔から 人を 背中に 乗せていたらしい。 １万年前の 壁画に 様子が 描かれている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "こうそくドライブ"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
		},

		damage: 100,
		cost: ["Grass", "Darkness", "Colorless"]
	}],

	retreat: 1,
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746518,
				tcgplayer: 567537,
				cardtrader: 269708,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577372,
			},
		},
	]
}

export default card
