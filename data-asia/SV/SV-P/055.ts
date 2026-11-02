import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "マフィティフex",
		'zh-tw': "閃電鳥ex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 260,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ひるませる",
				'zh-tw': "閃電連彈",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-50」される。",
				'zh-tw': "對手的身上放置有傷害指示物的1隻備戰寶可夢也受到90點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: { ja: "プライドファング" },
			damage: "100+",
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンにダメカンがのっているなら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705381,
				tcgplayer: 587812,
			},
		},
	],

	evolveFrom: {
		ja: "オラチフ",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [943],

	suffix: "EX",
};

export default card;
