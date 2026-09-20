import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキーex",
	},

	illustrator: "Keisuke Azuma",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ルナティッククロー" },
			damage: "100+",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、140ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908379,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [197],

	suffix: "EX",
};

export default card;
