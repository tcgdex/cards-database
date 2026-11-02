import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "あらゆる ものが 出す 波動を 読みとることで １キロ先に いる 相手の 気持ちも 理解できる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はどうだん" },
			damage: 100,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908247,
			},
		},
	],

	evolveFrom: {
		ja: "リオル",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [448],
};

export default card;
