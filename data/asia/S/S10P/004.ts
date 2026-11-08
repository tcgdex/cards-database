import { Card } from "models/database/card";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コロボーシ",
		'zh-tw': "圓法師",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "触角 同士が ぶつかると コロン コロンと 木琴に 似た 音色を 奏でる。",
		'zh-tw': "觸角之間互相碰撞時， 會叮叮咚咚地奏出 如同木琴一般的音色。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ころばす",
				'zh-tw': "打滾",
			},
			damage: "10+",
			cost: ["Grass"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651063,
				tcgplayer: 569847,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [401],
};

export default card;
