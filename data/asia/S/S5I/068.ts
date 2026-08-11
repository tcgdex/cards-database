import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "マスタード いちげきのかた",
		'zh-tw': "馬士德 一擊流",
		th: "มัสตาร์ดรูปแบบจู่โจมครั้งเดียว",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。自分の山札から「いちげき」のポケモンを1枚選び、ベンチに出す。そして山札を切る。その後、自分の山札を5枚引く。",
		'zh-tw': "這張卡只有在自己的手牌只有這1張時才可使用。 從自己的牌庫選擇1張「一擊」寶可夢卡，放置於備戰區。並且重洗牌庫。然後，從自己的牌庫抽出5張卡。",
		th: "การ์ดนี้ จะใช้ได้แค่ตอนที่การ์ดบนมือฝ่ายเรามีการ์ดนี้เพียง 1 ใบเท่านั้น เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด จากนั้น จั่วการ์ด 5 ใบจากสำรับการ์ดฝ่ายเรา",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533562,
				tcgplayer: 569017,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
