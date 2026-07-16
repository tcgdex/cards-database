import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "オタマロ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "ほほの 振動膜を 震わせ 人には きこえない 音波を だし 仲間たちに 危険を 伝える。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねまくる" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数×10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555146,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [535],
};

export default card;
