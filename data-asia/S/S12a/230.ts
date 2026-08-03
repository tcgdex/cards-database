import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ダイケンキVSTAR",
		'zh-tw': "洗翠 大劍鬼VSTAR",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ザンゲツスター",
				'zh-tw': "殘月星星",
			},
			effect: {
				ja: "自分の番に使える。相手のポケモン1匹に、ダメカンを4個のせる。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "在自己的回合時可使用。在對手的1隻寶可夢身上放置4個傷害指示物。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "むじひなやいば",
				'zh-tw': "狠心利刃",
			},
			damage: "110+",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、110ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加110點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687792,
				tcgplayer: 571768,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ ダイケンキV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [503],
};

export default card;
