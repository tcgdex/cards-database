import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ボスの指令",
		'zh-tw': "老大的指令（赤日）",
		'th-th': "คำสั่งของบอส (อาคากิ)",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
		'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
		'th-th': "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว แล้วสลับกับโปเกมอนบนตำแหน่งต่อสู้",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687723,
				tcgplayer: 571699,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "None",
};

export default card;
