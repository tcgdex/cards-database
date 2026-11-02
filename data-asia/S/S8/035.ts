import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "パルスワンVMAX",
		'zh-tw': "逐電犬VMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "ライトニングストーム",
				'zh-tw': "雷電風暴",
			},
			damage: "30+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[雷]エネルギーの数×30ダメージ追加。",
				'zh-tw': "增加自己的場上寶可夢身上附加的【雷】能量的數量×30點傷害。",
			},
		},
		{
			name: {
				ja: "ダイボルト",
				'zh-tw': "極巨伏特",
			},
			damage: 230,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「ダイボルト」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「極巨伏特」。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575590,
				tcgplayer: 569536,
			},
		},
	],

	evolveFrom: {
		ja: "パルスワンV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [836],
};

export default card;
