import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ハルクジラ",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		ja: "氷雪地帯を 回遊する。 強靭な 筋肉と ぶ厚い 皮下脂肪で 体を 守る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ゆきなだれ" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ローリングスライダー" },
			damage: "100×",
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "コインを3回投げ、オモテの数×100ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 708469,
				tcgplayer: 587816,
			},
		},
	],

	evolveFrom: {
		ja: "アルクジラ",
	},

	retreat: 4,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [975],
};

export default card;
