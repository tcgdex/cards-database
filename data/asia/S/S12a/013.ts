import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードンV",
		'zh-tw': "噴火龍V",
		th: "ลิซาร์ดอนV",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "やきつくす",
				'zh-tw': "燒盡",
				th: "เผาให้เป็นเถ้าถ่าน",
			},
			damage: 90,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
				'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。",
				th: "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			},
		},
		{
			name: {
				ja: "ヒートブラスト",
				'zh-tw': "高溫爆破",
				th: "ฮีทบลาสท์",
			},
			damage: 180,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687493,
				tcgplayer: 571551,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [6],
};

export default card;
