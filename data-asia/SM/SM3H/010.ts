import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "リザード",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "尻尾を 振り回して 相手を なぎ倒し 鋭い ツメで ズタズタに ひきさいてしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ツメできりさく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ヒートブラスト" },
			damage: 70,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561074,
			},
		},
	],

	evolveFrom: {
		ja: "ヒトカゲ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [5],
};

export default card;
