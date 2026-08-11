import { Card } from "models/database/card";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒノヤコマ",
		'zh-tw': "火箭雀",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "巣穴の中に 火の粉を 飛ばし 驚いて 出てきた 獲物を 鋭い ツメで しとめるのだ。",
		'zh-tw': "會朝著獵物的巢穴中噴射火花，再用銳利的爪子解決掉 受驚嚇而跑出來的獵物。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ひをはく",
				'zh-tw': "吐火",
			},
			damage: 30,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667893,
				tcgplayer: 569949,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤヤコマ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [662],
};

export default card;
