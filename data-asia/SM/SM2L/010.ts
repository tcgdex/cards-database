import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルコ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "人を 驚かせるのが 好き。 海水を 飲み込んで ボールの ように ふくらみ 弾んで 遊ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねる" },
			damage: 20,
			cost: ["Water", "Colorless"],
		},
		{
			name: { ja: "なみのり" },
			damage: 70,
			cost: ["Water", "Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561414,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [320],
};

export default card;
