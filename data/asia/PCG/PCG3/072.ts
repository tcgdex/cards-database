import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗いSteelix",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [208],
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "エネルギーリンク",
			},
			effect: {
				'ja-jp': "廃棄の山を検索して、エネルギーカードを塗り、Dark Steelixに取り付けます。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "重い衝撃",
			},
			damage: 60,
		},
	],

	retreat: 4,

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
