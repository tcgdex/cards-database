import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "サダイジャVMAX",
		'zh-tw': "沙螺蟒VMAX",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "サンドインパルス",
				'zh-tw': "超極巨旋風氣旋",
			},
			damage: 60,
			cost: ["Fighting"],
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "選擇自己的場上寶可夢身上附加的任意數量的能量，以任意方式改附於自己的寶可夢身上。",
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
				cardmarket: 560460,
				tcgplayer: 569176,
			},
		},
	],

	evolveFrom: {
		ja: "サダイジャV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [844],
};

export default card;
