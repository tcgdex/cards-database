import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "サダイジャVMAX",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "サンドインパルス" },
			damage: 60,
			cost: ["Fighting"],
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "キョダイサイクロン" },
			damage: 180,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560962,
				tcgplayer: 569218,
			},
		},
	],

	evolveFrom: {
		ja: "サダイジャV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [844],
};

export default card;
