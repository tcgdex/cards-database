import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "カイ",
		'zh-tw': "珠貝",
		th: "ไค",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分の山札から[W]ポケモンとグッズをそれぞれ1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇【水】寶可夢卡與物品卡各1張，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "เลือกการ์ดโปเกมอน[น้ำ]และการ์ดไอเท็มแต่ละอย่าง อย่างละ 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687711,
				tcgplayer: 571687,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "None",
};

export default card;
