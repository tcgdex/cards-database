import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "サメハダー",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "獲物の 匂いを 嗅ぎとると お尻から 海水を 噴射して 時速１２０キロで 襲撃する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみすてる" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、トラッシュする。",
			},
		},
		{
			name: { ja: "ジェットヘッド" },
			damage: 100,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863475,
			},
		},
	],

	evolveFrom: {
		ja: "キバニア",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [319],
};

export default card;
