import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フーパ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "空間を ゆがめる リングで あらゆる ものを 離れた 場所へ 飛ばしてしまう トラブルメーカー。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くすねる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "ナックルインパクト" },
			damage: 130,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863784,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [720],
};

export default card;
