import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオVSTAR",
		'zh-tw': "路卡利歐VSTAR",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "ファイティングナックル",
				'zh-tw': "搏鬥肘擊",
			},
			damage: "120+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンV」なら、120ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加120點傷害。",
			},
		},
		{
			name: {
				ja: "はどうスター",
				'zh-tw': "[VSTAR力量]波導星星",
			},
			damage: "70×",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手の場のポケモンについているエネルギーの数×70ダメージ。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "造成對手的場上寶可夢身上附加的能量的數量×70點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687788,
				tcgplayer: 571764,
			},
		},
	],

	evolveFrom: {
		ja: "ルカリオV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [448],
};

export default card;
