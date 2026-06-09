import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ポリゴン",
		'zh-tw': "多邊獸",
		th: "โพรีกอน",
		ko: "폴리곤"
	},

	illustrator: "Taiga Kayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [137],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "近年は 電脳空間で 大活躍。 怪しい データが ないか チェックして まわっている。",
		'zh-tw': "近年在電腦空間大展身手。會四處巡邏查看有沒有可疑的資料。",
		th: "หลายปีที่ผ่านมา มันมีบทบาทอย่างมากในไซเบอร์สเปซ คอยตระเวนตรวจสอบว่ามีข้อมูลน่าสงสัยหรือไม่",
		ko: "근래에는 컴퓨터 공간에서 대활약한다. 수상한 데이터가 없는지 체크하며 돌아다닌다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "データはじき",
			'zh-tw': "資料處理",
			th: "ดีดข้อมูล",
			ko: "데이터 튕겨내기"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์ฝ่ายตรงข้าม",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬에게 붙어 있는 에너지를 1개 선택해서 상대의 벤치 포켓몬에게 붙인다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741875
	}
}

export default card