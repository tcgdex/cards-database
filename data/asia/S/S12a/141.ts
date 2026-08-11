import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミラージュゲート",
		'zh-tw': "幻想門",
		th: "มิราจเกต",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分のロストゾーンにカードが7枚以上あるときにしか使えない。 自分の山札から、それぞれちがうタイプの基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
		'zh-tw': "這張卡只有在自己的放逐區有7張以上的卡時才可使用。從自己的牌庫選擇最多2張各不同屬性的基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
		th: "การ์ดนี้ จะใช้ได้แค่ตอนที่การ์ดบนลอสต์โซนฝ่ายเรามีมากกว่าหรือเท่ากับ 7 ใบ เลือกการ์ดพลังงานพื้นฐานที่แต่ละใบต่างประเภทกันได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ แล้วสับสำรับการ์ด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687703,
				tcgplayer: 571679,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577499,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "None",
};

export default card;
