import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "シザリガー",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "巨大な ハサミを 振りまわす 暴れ者。 育てるのが とても 難しい ポケモンと いわれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ジョキジョキ" },
			damage: 40,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数ぶん、相手の山札を上からトラッシュする。",
			},
		},
		{
			name: { ja: "あばれハンマー" },
			damage: 180,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863479,
			},
		},
	],

	evolveFrom: {
		ja: "ヘイガニ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [342],
};

export default card;
