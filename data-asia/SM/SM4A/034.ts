import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "プリン",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "大きく お腹を 膨らませて 不思議な メロディーを 歌う。 聞くと すぐに 眠くなるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ころがる" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "おうふくビンタ" },
			damage: "20×",
			cost: ["Fairy", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560280,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [39],
};

export default card;
