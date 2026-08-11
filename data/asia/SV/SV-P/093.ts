import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "サナギラス",
		'zh-tw': "泰姆",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "体内で 圧縮させた ガスを 勢いよく 噴出させ 飛んで 暴れまわる サナギだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いわおとし" },
			damage: 20,
			cost: ["Fighting"],
		},
		{
			name: { ja: "ふんしゃタックル" },
			damage: 60,
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "自分のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723907,
				tcgplayer: 587851,
			},
		},
	],

	evolveFrom: {
		ja: "ヨーギラス",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [247],
};

export default card;
