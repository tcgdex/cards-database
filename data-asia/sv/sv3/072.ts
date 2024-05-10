import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘルガー",
		'zh-tw': "黑魯加",
		th: "เฮลการ์"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [229],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "口から 吹き出す 炎で 火傷すると いつまでたっても 傷口が うずいてしまう。",
		'zh-tw': "要是被牠口中噴出的火焰灼傷，傷口的部分不管過了多久都依舊會感到疼痛。",
		th: "แผลไฟไหม้ที่เกิดจากไฟที่มันพ่นออกมา ไม่ว่าจะผ่านไปนานแค่ไหนก็ยังรู้สึกเจ็บแปลบอยู่"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "かかんにせめる",
			'zh-tw': "果敢進攻",
			th: "โจมตีอย่างเด็ดเดี่ยว"
		},

		damage: "50+",

		effect: {
			ja: "相手のバトルポケモンが進化ポケモンなら、70ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加70點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอนวิวัฒนาการ การโจมตีนี้จะเพิ่มแดเมจอีก 70"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "シャドースラッシュ",
			'zh-tw': "暗影斬",
			th: "ชาโดว์สแลช"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card