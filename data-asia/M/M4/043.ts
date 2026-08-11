import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ウソッキー",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "攻撃 されないように ひたすら 木のマネをしているが 水は苦手で 雨になると どこかに 逃げ出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しれんのたび" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「変化の書」を2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "いわとばし" },
			damage: 30,
			cost: ["Fighting"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876942,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [185],
};

export default card;
