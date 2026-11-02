import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ダイケンキV",
		'zh-tw': "洗翠 大劍鬼V",
		th: "ฮิซุย ไดเคนคิV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つづらおとし",
				'zh-tw': "藤箱擊落",
				th: "ทิ้งตะกร้าสาน",
			},
			cost: ["Darkness"],
			effect: {
				ja: "相手の場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。",
				'zh-tw': "選擇最多2張對手的場上寶可夢身上附加的「寶可夢道具」卡，將其丟棄。",
				th: "เลือก [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายตรงข้ามได้สูงสุด 2 ใบ ทิ้งที่ตำแหน่งทิ้งการ์ด",
			},
		},
		{
			name: {
				ja: "シャドースラッシュ",
				'zh-tw': "暗影斬",
				th: "ชาโดว์สแลช",
			},
			damage: 180,
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
				th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687648,
				tcgplayer: 571624,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [503],
};

export default card;
