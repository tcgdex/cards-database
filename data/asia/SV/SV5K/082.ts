import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チラーミィ",
		'zh-tw': "泡沫栗鼠",
		'th-th': "จิลามี",
		'ko-kr': "치라미",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "しっぽで 汚れを 払い落す。 掃除を するときに 助かるが 潔癖症 なので 大変。",
		'zh-tw': "用尾巴來清掃灰塵。雖說能幫忙打掃是件好事， 但牠的潔癖也會讓人感到棘手。",
		'th-th': "ใช้หางปัดสิ่งสกปรกออก ช่วยได้ตอนทำความสะอาดแต่นิสัยรักความสะอาดนั้นก็ลำบากอยู่",
		'ko-kr': "꼬리로 더러운 것을 떨어낸다. 청소를 할 때는 도움이 되지만 결벽증이 있어서 힘들기도 하다.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "たたく",
				'zh-tw': "敲擊",
				'th-th': "ตี",
				'ko-kr': "때리기",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "おそうじ",
				'zh-tw': "掃除",
				'th-th': "ทำความสะอาด",
				'ko-kr': "청소",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。",
				'zh-tw': "選擇最多2張對手的場上寶可夢身上附加的「寶可夢道具」卡，將其丟棄。",
				'th-th': "เลือก [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายตรงข้ามได้สูงสุด 2 ใบ ทิ้งที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752863,
				tcgplayer: 568416,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [572],
};

export default card;
