import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ランターン",
		'zh-tw': "電燈怪",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "ランターンのだす 光は ５０００メートルの 深さ からでも 水面まで 届くほど 明るい。",
		'zh-tw': "電燈怪發出的光有著極高的亮度，甚至可以從５０００公尺 深的水底照亮水面。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 30,
			cost: ["Lightning"],
		},
		{
			name: {
				ja: "ストロングボルト",
				'zh-tw': "強力伏特",
			},
			damage: 160,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667911,
				tcgplayer: 569967,
			},
		},
	],

	evolveFrom: {
		ja: "チョンチー",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [171],
};

export default card;
