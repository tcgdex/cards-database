import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ナマケロ",
		'zh-tw': "懶人獺",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "１日に 葉っぱを ３枚も 食べれば 満足で それ以外は ２０時間も 眠っている。",
		'zh-tw': "每天只要能吃上３片葉子就滿足了。除此之外，牠還能睡上２０個小時。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶったらねる",
				'zh-tw': "揍人後睡覺",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをねむりにする。",
				'zh-tw': "將這隻寶可夢【睡眠】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571638,
				tcgplayer: 569373,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [287],
};

export default card;
