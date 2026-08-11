import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のタマンチュラ",
		'zh-tw': "<火箭隊的>團珠蛛",
		'zh-cn': "<火箭隊的>團珠蛛",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "体を 包みこむ 糸玉は 天敵の ストライクの カマを はね返す 弾力性を 持つ。",
		'zh-tw': "包裹著身體的線球 擁有足以把天敵飛天螳螂 的鐮刀反彈回去的彈力。",
		'zh-cn': "包裹著身體的線球 擁有足以把天敵飛天螳螂 的鐮刀反彈回去的彈力。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "とっしん",
				'zh-tw': "猛撞",
				'zh-cn': "猛撞",
			},
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
				'zh-cn': "這隻寶可夢也受到10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821839,
				tcgplayer: 628649,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [917],
};

export default card;
