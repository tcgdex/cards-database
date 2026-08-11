import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネコロロ",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'ja-jp': "美しい 毛並みを 持ち 女性トレーナーに 大人気。 決まった 住処を 持たない。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フレンドサーチ" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュにあるサポートを2枚、相手に見せてから、手札に加える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ねこキック" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559037,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "エネコ",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [301],
};

export default card;
