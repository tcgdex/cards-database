import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナゲツケサル",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "２０匹前後の グループを つくる。 その結束は 非常に 固く 絶対 仲間を 見捨てない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なげつける" },
			cost: ["Fighting"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "チームプレイ" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチの「ナゲツケサル」の数x30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560091,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [766],
};

export default card;
