import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "レジスチル",
		'zh-tw': "雷吉斯奇魯",
		th: "เรจิสตีล",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "伸び縮みする 柔らかさも あるが どんな 金属よりも 頑丈な 不思議な 物質で できている。",
		'zh-tw': "構成牠身體的神奇物質具有能夠伸縮的柔軟性， 但卻比任何金屬都還要堅韌。",
		th: "สร้างขึ้นจากวัสดุประหลาดที่แข็งแกร่งยิ่งกว่าโลหะชนิดใด แต่ก็มีความอ่อนตัวที่ยืดหดได้ด้วยเช่นกัน",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "レジゲート",
				'zh-tw': "雷吉之門",
				th: "เรจิเกต",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			},
		},
		{
			name: {
				ja: "ヘビーボンバー 220-",
				'zh-tw': "重磅衝撞",
				th: "เฮฟวีบอมเบอร์",
			},
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数×50ダメージぶん、このワザのダメージは小さくなる。",
				'zh-tw': "減少對手的戰鬥寶可夢【撤退】所需的能量的數量×50點傷害。",
				th: "แดเมจของท่าต่อสู้นี้จะลดลงตามจำนวนพลังงานสำหรับ[หนี]ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x50",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687659,
				tcgplayer: 571635,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577480,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "None",
	dexId: [379],
};

export default card;
