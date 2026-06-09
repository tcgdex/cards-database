import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "イオルブ",
		'zh-tw': "以歐路普",
		th: "อิออร์บ",
		ko: "이올브"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [826],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "サイコパワーを 放ち 周囲を 調べている。 観測範囲は 周囲 １０キロにも 達するぞ。",
		'zh-tw': "釋放出精神力量來調查周圍的情況。牠的偵測範圍甚至可以達到方圓１０公里。",
		th: "ปล่อยพลังจิตเพื่อสำรวจบริเวณโดยรอบ สังเกตการณ์ได้ไกลถึง 10 กิโลเมตรเลยนะ",
		ko: "사이코 파워를 발산해 주위를 조사한다. 관측 범위는 주변 10km에 달한다."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "サテライトビーム",
			'zh-tw': "衛星光束",
			th: "ลำแสงดาวเทียม",
			ko: "새틀라이트빔"
		},

		damage: "30×",

		effect: {
			ja: "相手のトラッシュにあるエネルギーの枚数×30ダメージ。",
			'zh-tw': "造成對手的棄牌區的能量卡的張數×30點傷害。",
			th: "แดเมจจะเท่ากับจำนวนการ์ดพลังงานที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม x30",
			ko: "상대의 트래쉬에 있는 에너지의 장수 × 30데미지를 준다."
		}
	}, {
		cost: ["Colorless", "Colorless"],

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
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card