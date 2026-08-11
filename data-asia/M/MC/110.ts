import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "チャオブー",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "体内の 炎が 燃え上がると 動きの キレと スピードが 増す。 ピンチになると 煙を 吹き出す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かえん" },
			damage: 30,
			cost: ["Fire"],
		},
		{
			name: { ja: "ヒートスタンプ" },
			damage: 80,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863406,
			},
		},
	],

	evolveFrom: {
		ja: "ポカブ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [499],
};

export default card;
