import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
		'zh-tw': "代歐奇希斯",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "宇宙ウイルスが 突然変異を 起こして ポケモンに なった。 オーロラの 近くに 現れる。",
		'zh-tw': "宇宙病毒發生突變後變成了寶可夢。出現在極光的附近。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "フォトンブースト",
				'zh-tw': "光子提昇",
			},
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに「フュージョンエネルギー」がついているなら、80ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有「匯流能量」，則增加80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575600,
				tcgplayer: 569546,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [386],
};

export default card;
