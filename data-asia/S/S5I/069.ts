import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "あくの塔",
		'zh-tw': "惡之塔",
		th: "หอคอยแห่งความมืด",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札から「いちげき」のカードを1枚トラッシュするなら、自分の山札を2枚引いてよい。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，若從自己的手牌將1張「一擊」卡丟棄，則可從自己的牌庫抽出2張卡。",
		th: "ผู้เล่นทั้งสองฝ่ายสามารถใช้ได้ 1 ครั้งในแต่ละเทิร์นของตัวเอง ถ้าทิ้งการ์ด 1 ใบจากการ์ดบนมือฝ่ายตัวเองที่ตำแหน่งทิ้งการ์ด จะจั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายตัวเองก็ได้",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533567,
				tcgplayer: 569018,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
