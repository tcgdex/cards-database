import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "チャオブー",
	},

	illustrator: "Masa",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "体内の 炎が 燃え上がると 動きの キレと スピードが 増す。 ピンチになると 煙を 吹き出す。",
	},

	stage: "Stage1",

	attacks: [
		{ name: { ja: "かえん" }, damage: 30, cost: ["Fire"] },
		{
			name: { ja: "ヒートスタンプ" },
			damage: 80,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		ja: "ポカブ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [499],
	thirdParty: {
		cardmarket: 829452,
		tcgplayer: 636650,
	},
};

export default card;
