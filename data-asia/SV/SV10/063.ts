import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドキングex",
		'zh-tw': "<火箭隊的>尼多王ex",
		'zh-cn': "<火箭隊的>尼多王ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ダーティホーン",
				'zh-tw': "惡劣角擊",
				'zh-cn': "惡劣角擊",
			},
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は8個になる。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為8個。",
				'zh-cn': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為8個。",
			},
		},
		{
			name: {
				ja: "キングインパクト",
				'zh-tw': "王者衝擊",
				'zh-cn': "王者衝擊",
			},
			damage: 240,
			cost: ["Darkness", "Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821895,
				tcgplayer: 628704,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のニドリーノ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [34],

	suffix: "EX",
};

export default card;
