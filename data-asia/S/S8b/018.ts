import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ブースター",
		'zh-tw': "火伊布",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "体内に 炎が 溜まると ブースターの 体温も 最高 ９００度 まで 上がっていく。",
		'zh-tw': "當火焰在體內積蓄時，火伊布的體溫也會隨之上升到最高９００度。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "しゃくねつのめざめ",
				'zh-tw': "灼熱覺醒",
			},
			effect: {
				ja: "このポケモンに「メモリーカプセル」がついているなら、おたがいの場の[草]ポケモンの特性は、すべてなくなる。",
				'zh-tw': "若這隻寶可夢身上附有「回憶膠囊」，則雙方的場上【草】寶可夢的特性全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ほのおのたてがみ",
				'zh-tw': "火之鬃",
			},
			damage: 100,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586533,
				tcgplayer: 571271,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578363,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "None",
	dexId: [136],
};

export default card;
