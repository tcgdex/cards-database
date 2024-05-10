import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ゲンガーex",
		'zh-tw': "耿鬼ex",
		th: "เก็งกาex"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "むしばむのろい",
			'zh-tw': "侵蝕詛咒",
			th: "คำสาปกัดกิน"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手は手札からエネルギーをポケモンにつけるたび、そのポケモンにダメカンを2個のせる。",
			'zh-tw': "只要這隻寶可夢在場上，每次對手從手牌將能量卡附於寶可夢身上時，在那隻寶可夢身上放置2個傷害指示物。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ ทุกครั้งที่ฝ่ายตรงข้ามติดการ์ดพลังงานจากบนมือที่โปเกมอน ให้วางตัวนับแดเมจ 2 ตัวบนโปเกมอนนั้น"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "トリックステップ",
			'zh-tw': "戲法舞步",
			th: "ทริกสเต็ป"
		},

		damage: 160,

		effect: {
			ja: "のぞむなら、相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
			'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。",
			th: "หากต้องการ เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์ฝ่ายตรงข้าม"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card