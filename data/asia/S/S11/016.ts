import { Card } from "models/database/card";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグカルゴ",
		'zh-tw': "熔岩蝸牛",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "体は いつも 波打っていて 溶岩のように 熱い。 ときどき 殻から 火の粉が漏れる。",
		'zh-tw': "身體總是不斷起伏著，像熔岩一樣灼熱。 會不時從殼裡冒出火花。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ほのお",
				'zh-tw': "火焰",
			},
			damage: 30,
			cost: ["Fire"],
		},
		{
			name: {
				'ja-jp': "ロストボルケーノ",
				'zh-tw': "放逐火山",
			},
			damage: 220,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーをすべて、ロストゾーンに置く。",
				'zh-tw': "將這隻寶可夢身上附加的所有能量放置於放逐區。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667891,
				tcgplayer: 569947,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マグマッグ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [219],
};

export default card;
