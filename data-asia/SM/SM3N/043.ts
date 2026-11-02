import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン2",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "惑星 開発を 視野に 入れ 当時の 最新技術で ポリゴンを アップデートしたのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "けいさん" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を上から6枚見て、好きな順番に入れ替えて、山札の上にもどす。",
			},
		},
		{
			name: { ja: "ビーム" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561043,
			},
		},
	],

	evolveFrom: {
		ja: "ポリゴン",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [233],
};

export default card;
