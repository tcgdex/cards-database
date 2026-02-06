import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騎拉帝納VSTAR",
		th: "กิราตินาVSTAR",
		ja: "ギラティナVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "放逐衝擊",
			th: "ลอสต์อิมแพค",
			ja: "ロストインパクト"
		},

		effect: {
			'zh-tw': "選擇2個自己的場上寶可夢身上附加的能量，放置於放逐區。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเรา 2 ลูก วางไว้ที่ลอสต์โซน",
			ja: "自分の場のポケモンについているエネルギーを2個選び、ロストゾーンに置く。"
		},

		damage: 280,
		cost: ["Grass", "Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星安魂曲",
			th: "[พลังVSTAR] สตาร์เรควีเอ็ม",
			ja: "スターレクイエム"
		},

		effect: {
			'zh-tw': "這個招式只有在自己的放逐區有10張以上的卡時才可使用。將對手的戰鬥寶可夢【氣絕】。[對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "ท่าต่อสู้นี้ จะใช้ได้แค่ตอนที่การ์ดบนลอสต์โซนฝ่ายเรามีมากกว่าหรือเท่ากับ 10 ใบ ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม[หมดสภาพ] {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}",
			ja: "このワザは、自分のロストゾーンにカードが10枚以上あるときにしか使えない。相手のバトルポケモンをきぜつさせる。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		},

		cost: ["Grass", "Psychic"]
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 687673
	}
}

export default card