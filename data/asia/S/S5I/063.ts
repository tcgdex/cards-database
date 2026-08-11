import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キャンプセット",
		'zh-tw': "露營組合",
		'th-th': "แคมป์เซ็ต",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードを使ったら、自分の番は終わる。自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
		'zh-tw': "若使用了這張卡，則自己的回合結束。 從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。",
		'th-th': "เมื่อใช้การ์ดนี้แล้ว จะจบเทิร์นฝ่ายเรา เลือกการ์ดที่ชอบจากสำรับการ์ดฝ่ายเรา 1 ใบ แล้วนำขึ้นมือ แล้วสับสำรับการ์ด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533537,
				tcgplayer: 569012,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
