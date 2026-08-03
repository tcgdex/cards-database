import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "いちげきウーラオスVMAX",
		'zh-tw': "一擊武道熊師VMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "せいけんづき",
				'zh-tw': "正拳突",
			},
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: {
				ja: "キョダイイチゲキ",
				'zh-tw': "超極巨奪命一擊",
			},
			damage: 270,
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
				'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586609,
				tcgplayer: 571346,
			},
		},
	],

	evolveFrom: {
		ja: "いちげきウーラオスV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [892],
};

export default card;
