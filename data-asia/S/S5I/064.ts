import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "いちげきの巻物 怒りの巻",
		'zh-tw': "一擊的卷軸 憤怒之卷",
		th: "ม้วนคัมภีร์จู่โจมครั้งเดียว ม้วนแห่งความโกรธเกรี้ยว",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「いちげき」のポケモンは、このカードに書かれているワザを使える。［ワザを使うためのエネルギーは必要。］[F] どはつてん 10+このポケモンにのっているダメカンの数ｘ10ダメージ追加。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
		th: "การ์ดไอเท็มติดโปเกมอน ใช้ติดโปเกมอนฝ่ายเรา 1 ตัวติดได้ 1 ใบ และติดไปตลอด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533542,
				tcgplayer: 569013,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
