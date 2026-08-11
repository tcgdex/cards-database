import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ロコンV",
		'zh-tw': "阿羅拉 六尾V",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ホワイトドロップ",
				'zh-tw': "皎白墜擊",
			},
			damage: "10+",
			cost: [],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンV」なら、50ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加50點傷害。",
			},
		},
		{
			name: {
				ja: "フロストスマッシュ",
				'zh-tw': "冰霜粉碎",
			},
			damage: 110,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673019,
				tcgplayer: 570785,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [37],
};

export default card;
