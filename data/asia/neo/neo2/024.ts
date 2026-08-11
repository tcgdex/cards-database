import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "xatu",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [178],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "エネルギーサイクル",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、防御ポケモンに1枚のエネルギーカードを選択し、対戦相手の1枚をベンチポケモンに選択します。そのエネルギーカードをそのポケモンに攻撃します。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				'ja-jp': "Super Psy",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
