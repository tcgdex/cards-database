import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "嵐の山脈",
		'zh-tw': "暴風雨山脈",
		th: "เทือกเขาแห่งพายุ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札から[雷]または[竜]タイプのポケモンを1枚選び、ベンチに出してよい。そして山札を切る。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可從自己的牌庫選擇1張【雷】或者【龍】屬性的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
		th: "ผู้เล่นทั้งสองฝ่าย ในแต่ละเทิร์นของตัวเองทำได้ 1 ครั้ง เลือกการ์ดโปเกมอน[พื้นฐาน]ประเภท[สายฟ้า]หรือ[มังกร] 1 ใบจากสำรับการ์ดฝ่ายเรา จะวางบนเบนช์ก็ได้ แล้วสับสำรับการ์ด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687726,
				tcgplayer: 571702,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577517,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "None",
};

export default card;
