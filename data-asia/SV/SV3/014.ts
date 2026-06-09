import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ロコン",
		'zh-tw': "六尾",
		th: "โรคอน"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "６本の しっぽは 育つごとに 毛並みが 良くなり 美しくなる。 抱きしめると ほんのり 温かい。",
		'zh-tw': "隨著身體的成長，６根尾巴的毛髮也會變得更漂亮。緊緊抱著牠時能感到微微的溫暖。",
		th: "ทุกครั้งที่หางทั้ง 6 หางโตขึ้น เส้นขนจะเรียงสวยงาม พอกอดจะรู้สึกอบอุ่นเล็กน้อย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "かえん",
			'zh-tw': "烈焰",
			th: "เผาไหม้"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "あやしいひかり",
			'zh-tw': "奇異之光",
			th: "แสงประหลาด"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 723932
	}
}

export default card