import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハンター",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [93],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "タイムスパイラル",
			},
			effect: {
				'ja-jp': "相手が進化したポケモンをプレイしている場合は、1つを選択してコインをひっくり返します。頭の場合は、そのポケモンの最高段階の進化カードを取り外し、相手にそれを彼または彼女のデッキにシャッフルさせます。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "出没",
			},
			effect: {
				'ja-jp': "防御ポケモンに2つのダメージカウンターを置きます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
