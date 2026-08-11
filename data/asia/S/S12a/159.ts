import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "博士の研究",
		'zh-tw': "博士的研究（山梨博士）",
		th: "งานวิจัยของศาสตราจารย์ (ศาสตราจารย์นานาคามาโดะ)",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべてトラッシュし、山札を7枚引く。",
		'zh-tw': "將自己的手牌全部丟棄，從牌庫抽出7張卡。",
		th: "ทิ้งการ์ดบนมือฝ่ายเราทั้งหมดที่ตำแหน่งทิ้งการ์ด แล้วจั่วการ์ด 7 ใบจากสำรับการ์ด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687721,
				tcgplayer: 571697,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "None",
};

export default card;
