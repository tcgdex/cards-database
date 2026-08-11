import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "コアルヒー",
		'zh-tw': "鴨寶寶",
		th: "โคอารูฮี",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "エサの 水苔を 探し 池の 深い場所を 泳ぎまわりながら 体を 鍛えているのだ。",
		'zh-tw': "會在池塘水深的地方 四處游動找水苔來吃， 順便鍛鍊身體。",
		th: "ฝึกฝนร่างกายด้วยการว่ายวนเวียนอยู่ในส่วนลึกของบ่อน้ำเพื่อหามอสซึ่งเป็นอาหาร",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ダブルドロー",
				'zh-tw': "雙重抽出",
				th: "ดับเบิลดรอว์",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
				'zh-tw': "從自己的牌庫抽出2張卡。",
				th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			},
		},
		{
			name: {
				ja: "するどいはね",
				'zh-tw': "銳利羽",
				th: "ขนปีกแหลมคม",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767181,
				tcgplayer: 568078,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [580],
};

export default card;
