import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "スリープ",
		'zh-tw': "催眠貘",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "獲物を 眠らせ 見ている ユメを 喰らう。 悪いユメは すっぱくて あまり 好んで 食べないらしい。",
		'zh-tw': "會讓獵物睡著，吃掉對方所做的夢。惡夢的味道是酸的， 所以牠似乎不怎麼愛吃。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "サイコパンチ",
				'zh-tw': "精神拳",
			},
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: {
				ja: "さいみんこうせん",
				'zh-tw': "催眠光線",
			},
			damage: 20,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667917,
				tcgplayer: 569973,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [96],
};

export default card;
