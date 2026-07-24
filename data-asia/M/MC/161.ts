import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "シャワーズex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ヘビースコール" },
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手の「ポケモンex」全員に、それぞれ60ダメージ。このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "アクアマリン" },
			damage: 280,
			cost: ["Fire", "Water", "Lightning"],
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
				cardmarket: 863457,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [134],

	suffix: "EX",
};

export default card;
