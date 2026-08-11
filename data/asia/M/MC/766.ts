import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガリザードンYex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 360,
	types: ["Fire"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "プロージョンY" },
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを3個トラッシュし、相手のポケモン1匹に、280ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864068,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "リザード",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [6],

	suffix: "EX",
};

export default card;
