import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コイル",
	},

	illustrator: "Fumie Kittaka",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "たびたび 停電の 原因と なる ため コイルが 嫌がる 電波を 流す 発電所も あるほど。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ミラーショット" },
			damage: 10,
			cost: ["Lightning"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555269,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Character Rare",
	dexId: [81],
};

export default card;
