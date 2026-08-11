import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ボクレー",
		'zh-tw': "小木靈",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "森で さまよい 命を 落とした 子どもの 魂が 切り株に 宿り ポケモンに 生まれ変わった。",
		'zh-tw': "在森林中迷路死去的孩子的魂魄附在樹樁上， 轉生成了寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっかける",
				'zh-tw': "鉤住",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667614,
				tcgplayer: 569942,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [708],
};

export default card;
