import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "クレベース",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "背中に 数匹の カチコールを 乗せて 暮らす 様子は まるで 氷の 航空母艦のようだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "じばんとうけつ" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、相手は手札からスタジアムを出せない。",
			},
		},
		{
			name: { ja: "ロケットずつき" },
			damage: 100,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559571,
			},
		},
	],

	evolveFrom: {
		ja: "カチコール",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [713],
};

export default card;
