import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨーギラス",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "地底 奥深くで 生まれる。 まわりの 土を たいらげると 地上に 現われ サナギになる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なしくずし" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558589,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [246],
};

export default card;
