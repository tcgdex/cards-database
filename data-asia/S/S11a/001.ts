import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ストライク",
		'zh-tw': "飛天螳螂",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "戦いを 重ねるごとに 鎌の 切れ味は 上がる。 大木も 一刀両断に 切り裂くぞ。",
		'zh-tw': "隨著牠歷經越多的對戰，鐮刀也就會變得越鋒利。連大樹也能一刀劈成兩半。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "おんそくぎり",
				'zh-tw': "音速斬",
			},
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 672998,
				tcgplayer: 570764,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570858,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [123],
};

export default card;
