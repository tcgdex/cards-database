import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "プライスのピロスワイン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [221],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "超氷の風",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は相手の各ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "降ろす",
			},
			effect: {
				ja: "PryceのPiloswineは、それ自体に10ダメージを与えます。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
