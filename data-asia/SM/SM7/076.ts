import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "エネコロロ",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "美しい 毛並みを 持ち 女性トレーナーに 大人気。 決まった 住処を 持たない。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フレンドサーチ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュにあるサポートを2枚、相手に見せてから、手札に加える。",
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
		ja: "エネコ",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [301],
};

export default card;
