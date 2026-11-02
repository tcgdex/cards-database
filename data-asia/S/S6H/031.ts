import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "スリープ",
		'zh-tw': "催眠貘",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "獲物を 眠らせ 見ている ユメを 喰らう。 悪いユメは すっぱくて あまり 好んで 食べないらしい。",
		'zh-tw': "會讓獵物睡著，吃掉對方所做的夢。惡夢的味道是酸的，所以牠似乎不怎麼愛吃。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はたく",
				'zh-tw': "撿起來吃",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560447,
				tcgplayer: 569163,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [96],
};

export default card;
