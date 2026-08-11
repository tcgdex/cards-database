import { Card } from "models/database/card";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャヒート",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'ja-jp': "首の 付け根に 炎の 鈴が ある。 炎が 噴きだすとき リンリンと 高い音が 鳴る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みだれひっかき" },
			damage: "20×",
			cost: ["Fire"],
			effect: {
				'ja-jp': "コインを3回投げ、オモテの数x20ダメージ。",
			},
		},
		{
			name: { ja: "かえんほうしゃ" },
			damage: 90,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561536,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニャビー",
	},

	retreat: 2,
	rarity: "None",
	dexId: [726],
};

export default card;
