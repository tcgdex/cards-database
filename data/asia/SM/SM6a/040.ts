import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャランゴ",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "鱗は どんどん 生え変わる。 新しくなるたび 鱗は 硬く 鋭く なっていく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ガードプレス" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ドラゴンクロー" },
			damage: 70,
			cost: ["Lightning", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559332,
			},
		},
	],

	evolveFrom: {
		ja: "ジャラコ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [783],
};

export default card;
