import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ペリッパー",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'ja-jp': "餌集めは 若い ♂の 仕事。 大きなクチバシに 餌を 溜めて 仲間が 待つ 巣まで 運ぶ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しょうか" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについている[炎]エネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "みずのはどう" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559031,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "キャモメ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [279],
};

export default card;
