import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "レントラーV"
	},

	illustrator: "MUGENUP",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [405],
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "スナイプファング"
		},

		effect: {
			ja: "相手の手札を見て、その中からトレーナーズを1枚選び、トラッシュする。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "ラジエートパルス"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個トラッシュし、相手のバトルポケモンをマヒにする。"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651312,
				tcgplayer: 569825,
				cardtrader: 234210,
			},
		},
	]
}

export default card
