import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ピクシー",
		'zh-tw': "皮可西",
		th: "ปิคซี",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "耳が 良くて １キロ 離れた ところで 落とした 針の音を 見事に 聞き分けられる。",
		'zh-tw': "聽覺靈敏，連１公里以外 針落地的聲音都能夠 分辨得一清二楚。",
		th: "มีประสาทรับฟังเสียงที่ดี สามารถแยกแยะเสียงของเข็มที่หล่นในสถานที่ที่ห่างออกไป 1 กิโลเมตรได้อย่างง่ายดาย",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ゆびをふる",
				'zh-tw': "揮指",
				th: "ตวัดนิ้ว",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢持有的招式，作為這個招式使用。",
				th: "เลือกท่าต่อสู้ที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมี 1 ท่า ใช้เป็นท่าต่อสู้นี้ได้",
			},
		},
		{
			name: {
				ja: "マジカルショット",
				'zh-tw': "魔法射擊",
				th: "เมจิคัลช็อต",
			},
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767139,
				tcgplayer: 568036,
			},
		},
	],

	evolveFrom: {
		ja: "ピッピ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [36],
};

export default card;
