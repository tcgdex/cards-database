import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ハンドトリマー",
		'zh-tw': "手部修剪器",
		th: "แฮนด์ทริมเมอร์",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ自分の手札が5枚になるようにトラッシュする。（トラッシュは相手から行う。手札が5枚以下のプレイヤーはトラッシュしない。）",
		'zh-tw': "雙方玩家各將自己的手牌丟棄直到變為5張為止。（對手先丟棄。手牌為5張以下的玩家不丟棄。）",
		th: "ผู้เล่นทั้งสองฝ่าย แต่ละฝ่ายทิ้งการ์ดบนมือฝ่ายตัวเองจนเหลือ 5 ใบที่ตำแหน่งทิ้งการ์ด (ฝ่ายตรงข้ามเริ่มทิ้งก่อน ผู้เล่นที่มีการ์ดบนมือน้อยกว่าหรือเท่ากับ 5 ใบไม่ต้องทิ้งการ์ด)",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752945,
				tcgplayer: 566212,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
