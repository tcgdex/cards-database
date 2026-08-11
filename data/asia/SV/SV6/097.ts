import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゼイユ",
		'zh-tw': "丹瑜",
		'th-th': "เซย์ยุ",
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、先攻プレイヤーの最初の番でも使える。自分の手札をすべてトラッシュし、山札を5枚引く。",
		'zh-tw': "這張卡可在先攻玩家的最初回合使用。 將自己的手牌全部丟棄，從牌庫抽出5張卡。",
		'th-th': "การ์ดนี้ แม้ในเทิร์นแรกสุดของผู้เล่นฝ่ายเริ่มก่อนก็สามารถใช้ได้ ทิ้งการ์ดบนมือฝ่ายเราทั้งหมดที่ตำแหน่งทิ้งการ์ด จั่วการ์ด 5 ใบจากสำรับการ์ด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767190,
				tcgplayer: 568087,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
