import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラピオンVSTAR",
		'zh-tw': "龍王蠍VSTAR",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ハザードスター",
				'zh-tw': "危害星星",
			},
			effect: {
				ja: "自分の番に使える。相手のバトルポケモンをどくとマヒにする。このどくでのせるダメカンの数は3個になる。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "在自己的回合時可使用。將對手的戰鬥寶可夢【中毒】與【麻痺】。因這個【中毒】而放置的傷害指示物的數量改為3個。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ビッグバンアーム 250-",
				'zh-tw': "大爆炸之臂",
			},
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
				'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667942,
				tcgplayer: 569998,
			},
		},
	],

	evolveFrom: {
		ja: "ドラピオンV",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [452],
};

export default card;
