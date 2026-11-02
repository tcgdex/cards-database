import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ブロスター",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "ハサミの 後ろの ノズルから 水を 噴き出す 推進力で ６０ノットの スピードで 進む。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スタンバイ" },
			cost: ["Water"],
			effect: {
				ja: "次の自分の番、このポケモンの「ねらいうち」のダメージは「120」になる。",
			},
		},
		{
			name: { ja: "ねらいうち" },
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン1匹に、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559567,
			},
		},
	],

	evolveFrom: {
		ja: "ウデッポウ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [693],
};

export default card;
