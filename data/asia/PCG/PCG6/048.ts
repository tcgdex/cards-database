import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キルリア",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [281],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "落ち着いた心",
			},
			effect: {
				'ja-jp': "Kirliaから3つのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "サイキックブーム",
			},
			effect: {
				'ja-jp': "20ダメージに加えて、防御ポケモンに付着した各エネルギーに対してさらに10ダメージを与えます。",
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
