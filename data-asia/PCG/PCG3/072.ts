import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いSteelix",
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
				ja: "エネルギーリンク",
			},
			effect: {
				ja: "廃棄の山を検索して、エネルギーカードを塗り、Dark Steelixに取り付けます。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "重い衝撃",
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
