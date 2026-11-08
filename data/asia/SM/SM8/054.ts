import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヨーギラス",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "地底 奥深くで 生まれる。 まわりの 土を たいらげると 地上に 現われ サナギになる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きずをえぐる" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンにダメカンが3個以上のっているなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558693,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [246],
};

export default card;
