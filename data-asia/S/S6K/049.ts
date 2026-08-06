import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロスV",
		'zh-tw': "巨金怪V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "バレットパンチ",
				'zh-tw': "同步之錘",
			},
			damage: "20+",
			cost: ["Metal"],
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ追加。",
				'zh-tw': "若這隻寶可夢與對手的戰鬥寶可夢，身上附加的能量數量相同，則增加90點傷害。",
			},
		},
		{
			name: { ja: "シンクロハンマー" },
			damage: "60+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "このポケモンと相手のバトルポケモンについているエネルギーの数が同じなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560835,
				tcgplayer: 569277,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [376],
};

export default card;
