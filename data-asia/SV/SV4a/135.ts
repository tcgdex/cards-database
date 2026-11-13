import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オンバーンex"
	},

	illustrator: "Nisota Niso",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [715],
	hp: 260,
	types: ["Dragon"],

	evolveFrom: {
		ja: "オンバット"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			ja: "おんみつひこう"
		},

		effect: {
			ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "ドミネートエコー"
		},

		effect: {
			ja: "次の相手の番、相手は手札から特殊エネルギーを出してつけられず、スタジアムも出せない。"
		},

		damage: 140,
		cost: ["Psychic", "Darkness"]
	}],

	retreat: 0,
	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746517,
				tcgplayer: 567536,
				cardtrader: 269716,
			},
		},
	]
}

export default card
