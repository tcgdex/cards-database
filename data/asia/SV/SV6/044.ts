import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タイカイデン",
		'zh-tw': "大電海燕",
		'th-th': "ไทไคเด็น",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'ja-jp': "のど袋に 翼で 作った 電気を 溜める。 羽の 油分が とても 少なく 泳ぎは 苦手。",
		'zh-tw': "會把翅膀製造的電儲存到喉囊裡。 由於羽毛含的油脂少之又少， 導致牠不是很擅長游泳。",
		'th-th': "สะสมไฟฟ้าที่สร้างจากปีกไว้ในถุงที่คอ ปริมาณน้ำมันในขนปีกนั้นน้อยมากจึงไม่ถนัดการว่ายน้ำ",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ふうりょくチャージ",
				'zh-tw': "風力充能",
				'th-th': "ชาร์จพลังลม",
			},
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
				'zh-tw': "在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
				'th-th': "เทิร์นถัดไปของฝ่ายเรา แดเมจของท่าต่อสู้ที่โปเกมอนนี้ ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+120]",
			},
		},
		{
			name: {
				'ja-jp': "ストロングボルト",
				'zh-tw': "強力伏特",
				'th-th': "สตรองโวลต์",
			},
			damage: 100,
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
				'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767137,
				tcgplayer: 568034,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カイデン",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [941],
};

export default card;
