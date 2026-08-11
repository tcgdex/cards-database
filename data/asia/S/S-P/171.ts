import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴリランダーVMAX",
		'zh-tw': "駒刀小兵",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "キョダイコランダ",
				'zh-tw': "突擊",
			},
			damage: 180,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 540526,
				tcgplayer: 597369,
			},
		},
	],

	evolveFrom: {
		ja: "ゴリランダーV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [812],
};

export default card;
