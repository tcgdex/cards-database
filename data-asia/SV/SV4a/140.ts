import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "プリン"
	},

	illustrator: "saino misaki",
	rarity: "None",
	category: "Pokemon",
	dexId: [39],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "つぶらな 瞳が 揺れるとき 眠たくなるような 不思議で 気持ちのいい 歌を 歌う。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "みちびく"
		},

		effect: {
			ja: "自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ふみふみ"
		},

		effect: {
			ja: "コインを2回投げ、オモテの数×20ダメージ。"
		},

		damage: "20×",
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
				cardmarket: 746522,
				tcgplayer: 567541,
				cardtrader: 269713,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577375,
			},
		},
	]
}

export default card
