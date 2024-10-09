import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "タイカイデン",
		'zh-tw': "大電海燕",
		th: "ไทไคเด็น"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Anesaki Dynamic",
	dexId: [941],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋に 翼で 作った 電気を 溜める。 羽の 油分が とても 少なく 泳ぎは 苦手。",
		'zh-tw': "會把翅膀製造的電儲存到喉囊裡。 由於羽毛含的油脂少之又少， 導致牠不是很擅長游泳。",
		th: "สะสมไฟฟ้าที่สร้างจากปีกไว้ในถุงที่คอ ปริมาณน้ำมันในขนปีกนั้นน้อยมากจึงไม่ถนัดการว่ายน้ำ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふうりょくチャージ",
			'zh-tw': "風力充能",
			th: "ชาร์จพลังลม"
		},

		damage: 10,

		effect: {
			ja: "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
			'zh-tw': "在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
			th: "เทิร์นถัดไปของฝ่ายเรา แดเมจของท่าต่อสู้ที่โปเกมอนนี้ ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+120]"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ストロングボルト",
			'zh-tw': "強力伏特",
			th: "สตรองโวลต์"
		},

		damage: 100,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card