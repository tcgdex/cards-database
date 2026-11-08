import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チラチーノ",
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "白い 体毛は 特別な 脂で コーティングされているので 敵の 攻撃を 受け流すのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ともだちのわ" },
			damage: "20+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分のベンチポケモンの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863906,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "チラーミィ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [573],
};

export default card;
