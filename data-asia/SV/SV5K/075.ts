import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ランクルス",
		'zh-tw': "人造細胞卵",
		th: "แลนคูลัส",
		ko: "란쿨루스"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	dexId: [579],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "超能力を 使うよりも 自慢の 腕を ぶん回して 殴り倒すのを 好んでいる。",
		'zh-tw': "比起使用超能力，牠更喜歡靠著揮動 自傲的手臂來打倒對手。",
		th: "ชอบใช้พลังที่ตัวเองภูมิใจต่อยทำลายมากกว่าใช้พลังจิต",
		ko: "초능력을 사용하는 것보다는 자랑거리인 팔을 휘둘러서 때려눕히는 것을 선호한다."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "サモンゲート",
			'zh-tw': "傳喚之門",
			th: "ซัมมอนเกต",
			ko: "서먼게이트"
		},

		effect: {
			ja: "自分の山札を上から8枚見て、その中からポケモンを好きなだけ選び、ベンチに出す。残りのカードは山札にもどして切る。",
			'zh-tw': "查看自己的牌庫上方8張卡，從其中選擇任意數量的寶可夢卡，放置於備戰區。將剩餘卡放回牌庫並重洗。",
			th: "ดูการ์ด 8 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดโปเกมอนจากในนั้นตามจำนวนที่ชอบ วางบนเบนช์ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
			ko: "자신의 덱을 위에서부터 8장 보고 그 중에서 포켓몬을 원하는 만큼 선택해서 벤치로 내보낸다. 남은 카드는 덱으로 되돌리고 섞는다."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ブレインシェイク",
			'zh-tw': "腦力震動",
			th: "เบรนเชค",
			ko: "브레인셰이크"
		},

		damage: 100,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			ko: "상대의 배틀 포켓몬을 혼란으로 만든다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752797
	}
}

export default card