import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コロボーシ",
		'zh-tw': "圓法師",
		'th-th': "โคโรโบชิ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "触角 同士が ぶつかると コロン コロンと 木琴に 似た 音色を 奏でる。",
		'zh-tw': "觸角之間互相碰撞時，會叮叮咚咚地奏出 如同木琴一般的音色。",
		'th-th': "เมื่อหนวดมากระทบกัน ก็จะเกิดโทนเสียงที่คล้ายกับเสียงระนาดฝรั่ง",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ころばす",
				'zh-tw': "打滾",
				'th-th': "ล้มกลิ้ง",
			},
			damage: "10+",
			cost: ["Grass"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
				'th-th': "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687489,
				tcgplayer: 571547,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577442,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "None",
	dexId: [401],
};

export default card;
