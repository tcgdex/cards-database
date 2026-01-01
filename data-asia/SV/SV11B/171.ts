import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ドリュウズex",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かんつうドリル" },
			damage: 60,
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "ダメカンがのっている相手のベンチポケモン1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "がんせきおとし" },
			damage: 200,
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: { ja: "このワザのダメージは抵抗力を計算しない。" },
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	evolveFrom: {
		ja: "モグリュー",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Special illustration rare",
	suffix: "EX",
};

export default card;
