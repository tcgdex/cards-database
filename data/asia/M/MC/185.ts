import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミロカロスex",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きらめくウロコ" },
			effect: {
				'ja-jp': "このポケモンは、相手の「テラスタル」のポケモンからワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒプノスプラッシュ" },
			damage: 160,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863481,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒンバス",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [350],

	suffix: "EX",
};

export default card;
