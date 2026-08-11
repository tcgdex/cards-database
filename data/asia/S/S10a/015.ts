import { Card } from "models/database/card";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ライチュウ",
		'zh-tw': "雷丘",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'ja-jp': "長い しっぽが アースになって 身を 守るため 自分自身は 高電圧にも 痺れないのだ。",
		'zh-tw': "長長的尾巴能夠像接地線一樣保護自己，因此即使 是高壓電也不會讓牠麻痺。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "でんきショック",
				'zh-tw': "電擊",
			},
			damage: 30,
			cost: ["Lightning"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
		{
			name: {
				'ja-jp': "きりふだスパーク",
				'zh-tw': "王牌電光",
			},
			damage: "100+",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分がすでにVSTARパワーを使っていたなら、120ダメージ追加。",
				'zh-tw': "若自己已經使出了【VSTAR】力量，則增加120點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656256,
				tcgplayer: 570678,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577101,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ピカチュウ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [26],
};

export default card;
