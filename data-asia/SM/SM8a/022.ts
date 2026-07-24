import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "グラエナ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "１０匹 程度の 群れを 作って 一糸乱れぬ チームワークで 獲物を 追いつめて しとめるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 30,
			cost: ["Darkness"],
		},
		{
			name: { ja: "あんこくのキバ" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで、1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558596,
			},
		},
	],

	evolveFrom: {
		ja: "ポチエナ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [262],
};

export default card;
