import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "シャワーズ",
		'zh-tw': "水伊布",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "シャワーズの 全身の ひれが 小刻みに 震えはじめるのは 数時間後に 雨が降る しるし。",
		'zh-tw': "當水伊布開始微微顫動牠全身上下的鰭，就表示幾個小時之後要下雨了。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "げきりゅうのめざめ",
				'zh-tw': "激流覺醒",
			},
			effect: {
				ja: "このポケモンに「メモリーカプセル」がついているなら、おたがいの場の[炎]ポケモンの特性は、すべてなくなる。",
				'zh-tw': "若這隻寶可夢身上附有「回憶膠囊」，則雙方的場上【火】寶可夢的特性全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "オーロラビーム",
				'zh-tw': "極光束",
			},
			damage: 70,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586544,
				tcgplayer: 571282,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578369,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "None",
	dexId: [134],
};

export default card;
