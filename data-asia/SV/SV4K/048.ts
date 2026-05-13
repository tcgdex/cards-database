import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "レパルダス",
		'zh-tw': "酷豹",
		th: "เลพัลดัส",
		ko: "레파르다스"
	},

	illustrator: "Yoshioka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [510],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "フォクスライと 縄張りを めぐり 争う。 音ひとつ たてずに 獲物の 背後に 忍び寄る。",
		'zh-tw': "和狐大盜爭搶地盤。能夠悄無聲息地 從背後偷偷靠近獵物。",
		th: "ต่อสู้แย่งชิงอาณาเขตกับฟ็อกสไล ลอบเข้าใกล้เหยื่อจากทางด้านหลังได้โดยไม่มีเสียงแม้แต่นิดเดียว",
		ko: "폭슬라이와 영역을 두고 다툰다. 소리를 전혀 내지 않고 먹이의 배후에 접근한다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ダーティスワップ",
			'zh-tw': "惡劣置換",
			th: "เดอร์ตี้สว็อป",
			ko: "더티스왑"
		},

		effect: {
			ja: "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
			'zh-tw': "選擇1隻自己的備戰寶可夢，將所選的寶可夢身上放置的傷害指示物，全部改放於對手的戰鬥寶可夢身上。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว ย้ายตัวนับแดเมจที่วางอยู่บนโปเกมอนที่เลือกทั้งหมด ไปวางที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม",
			ko: "자신의 벤치 포켓몬을 1마리 선택해서 선택한 포켓몬에게 올려져 있는 데미지 카운터를 모두 상대의 배틀 포켓몬에게 올린다."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きりさく",
			'zh-tw': "劈開",
			th: "ฟันแหลก"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741414
	}
}

export default card