import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "チリーン",
		'zh-tw': "風鈴鈴",
		th: "ชิรีน",
		ko: "치렁"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [358],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "超音波の 鳴き声を 持つ。 ふわふわと 浮かび 風に 乗って 長い 距離を 旅する。",
		'zh-tw': "擁有超音波的叫聲。輕飄飄地浮起來，乘著風旅行到遠方。",
		th: "มีเสียงร้องที่มีคลื่นเสียงความถี่สูง ลอยปลิวไปตามลม เดินทางท่องเที่ยวระยะทางไกล",
		ko: "초음파 울음소리를 가지고 있다. 둥둥 떠서 바람을 타고 긴 거리를 여행한다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ねむりにさそう",
			'zh-tw': "誘導睡眠",
			th: "ชวนให้หลับ",
			ko: "잠듦유인"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをねむりにする。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，將新上場的寶可夢【睡眠】。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำให้โปเกมอนที่เพิ่งออกมาใหม่เป็นสภาวะ[หลับ]",
			ko: "상대의 벤치 포켓몬을 1마리 선택해서 배틀 포켓몬과 교체한다. 그 뒤, 새로 나온 포켓몬을 잠듦으로 만든다."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "サイコショット",
			'zh-tw': "精神射擊",
			th: "ไซโคช็อต"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741855
	}
}

export default card