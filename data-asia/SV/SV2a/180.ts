import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "オムナイト",
		'zh-tw': "菊石獸",
		th: "ออมไนต์",
		id: "Omanyte",
	},

	illustrator: "Yano Keiji",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "絶滅した 古代のポケモン。 １０本の脚で 水を かき 漂うように 泳ぐ。",
		'zh-tw': "一度滅絕的古代寶可夢。會使用１０隻腳划水，在水中一漂一浮地游動。",
		th: "เป็นโปเกมอนดึกดำบรรพ์ที่สูญพันธุ์ไปแล้ว ว่ายน้ำโดยการตวัดขาทั้งสิบบนน้ำราวกับลอยตัวอยู่",
		id: "Pokémon purba yang telah punah. Omanyte mengayuh air menggunakan sepuluh kakinya dan berenang bagai mengambang.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "しょくしゅでもどす",
				'zh-tw': "觸手復元",
				th: "ใส่กลับด้วยหนวด",
				id: "Tentakel Pengembali",
			},
			damage: 50,
			cost: ["Water", "Water"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、相手の手札にもどす。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。",
				th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก นำกลับขึ้นมือฝ่ายตรงข้าม",
				id: "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu kembalikan ke Kartu Pegangan lawan.",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719633,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Illustration rare",
	dexId: [138],
};

export default card;
