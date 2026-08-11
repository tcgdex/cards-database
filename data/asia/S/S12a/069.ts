import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ガーディ",
		'zh-tw': "洗翠 卡蒂狗",
		th: "ฮิซุย การ์ดี",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "対になりて 縄張りを 哨戒す。 体毛に 火成岩なる 成分 混ざるは 火山活動の 影響と 推察す。",
		'zh-tw': "兩隻一組共同負責地盤的警戒工作。 體毛中混有火成岩的成分，可以 推想這是受到火山活動的影響。",
		th: "จับคู่กันเพื่อเฝ้าตรวจตราอาณาเขตของตน สันนิษฐานกันว่าส่วนประกอบของหินอัคนีที่ปะปนอยู่ในขนตามตัวนั้น น่าจะเกิดจากอิทธิพลของภูเขาไฟระเบิด",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "こがす",
				'zh-tw': "灼熱",
				th: "เผา",
			},
			cost: [],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687631,
				tcgplayer: 571607,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577466,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "None",
	dexId: [58],
};

export default card;
