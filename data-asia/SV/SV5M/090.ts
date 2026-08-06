import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "暗号マニアの解読",
		'zh-tw': "暗碼迷的解讀",
		th: "การถอดรหัสของผู้คลั่งไคล้รหัสลับ",
	},

	illustrator: "Taira Akitsu",
	category: "Trainer",

	effect: {
		ja: "自分の山札から好きなカードを2枚選ぶ。残りの山札を切り、選んだカードを好きな順番に入れ替えて、山札の上にもどす。",
		'zh-tw': "從自己的牌庫任意選擇2張卡。重洗剩餘牌庫，將所選的卡以任意順序排列，放回牌庫上方。",
		th: "เลือกการ์ดที่ชอบ 2 ใบจากสำรับการ์ดฝ่ายเรา สับสำรับการ์ดที่เหลือ เรียงการ์ดที่เลือกตามลำดับที่ชอบ ใส่กลับไปด้านบนของสำรับการ์ด",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752974,
				tcgplayer: 566241,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Ultra Rare",
};

export default card;
