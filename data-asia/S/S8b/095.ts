import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "れんげきウーラオスVMAX",
		'zh-tw': "連擊武道熊師VMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "しっぷうづき",
				'zh-tw': "疾風直撞",
			},
			damage: "30+",
			cost: ["Fighting"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、120ダメージ追加。",
				'zh-tw': "在這個回合，若從備戰區將這隻寶可夢放置於戰鬥場，則增加120點傷害。",
			},
		},
		{
			name: {
				ja: "キョダイレンゲキ",
				'zh-tw': "超極巨流水連擊",
			},
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン2匹に、それぞれ120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄，對手的2隻寶可夢各受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586611,
				tcgplayer: 571348,
			},
		},
	],

	evolveFrom: {
		ja: "れんげきウーラオスV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [892],
};

export default card;
