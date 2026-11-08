import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドータクン",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'ja-jp': "別世界への 穴を 開けて そこから 雨を 降らしていた。 そのため 豊作の神 とされる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かいてんアタック" },
			damage: 50,
			cost: ["Metal", "Colorless"],
		},
		{
			name: { ja: "ダブルインパクト" },
			damage: "100×",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数×100ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863803,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドーミラー",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [437],
};

export default card;
