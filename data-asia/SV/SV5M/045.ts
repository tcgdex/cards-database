import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "クチート",
		'zh-tw': "大嘴娃",
		th: "คูชีท",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "おとなしい 顔で 相手を 油断 させてから おおあごで がぶり。 噛みつくと 絶対に 放さない。",
		'zh-tw': "用溫順的長相讓對手大意，然後用大顎一口咬住對手。 咬住後就絕不會鬆口。",
		th: "ทำให้คู่ต่อสู้ตายใจด้วยใบหน้าดูสงบเสงี่ยม แล้วจึงขย้ำด้วยกรามใหญ่ เมื่อกัดแล้วจะไม่ปล่อยเด็ดขาด",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "さそっていたぶる",
				'zh-tw': "誘導敲詐",
				th: "ล่อมากรรโชก",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに30ダメージ。",
				'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到30點傷害。",
				th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำแดเมจ 30 กับโปเกมอนที่เพิ่งออกมาใหม่",
			},
		},
		{
			name: {
				ja: "するどいキバ",
				'zh-tw': "銳利之牙",
				th: "เขี้ยวคม",
			},
			damage: 100,
			cost: ["Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752929,
				tcgplayer: 566196,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [303],
};

export default card;
