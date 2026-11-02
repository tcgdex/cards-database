import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ハイパーボール",
		'zh-tw': "高級球",
		th: "ไฮเปอร์บอล",
	},

	illustrator: "Amelicart",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分の山札からポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。",
		'zh-tw': "這張卡必須將自己的2張手牌丟棄才可使用。 從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "การ์ดนี้ ถ้าไม่ทิ้งการ์ดบนมือฝ่ายเรา 2 ใบที่ตำแหน่งทิ้งการ์ด จะใช้ไม่ได้เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687700,
				tcgplayer: 571676,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577496,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "None",
};

export default card;
