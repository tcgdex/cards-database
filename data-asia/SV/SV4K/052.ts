import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "エクスレッグ",
		'zh-tw': "烈腿蝗",
		th: "เอ็กซ์เลก"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [920],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "本気になると 畳んでいた 脚で 立ち上がり 決戦モードになる。 短時間で 敵を 制圧する。",
		'zh-tw': "認真起來時會用折起的腳站起來，進入決戰模式。 會在短時間內鎮壓住敵人。",
		th: "เมื่อเอาจริงจะยืนขึ้นด้วยขาที่พับไว้และเข้าสู่โหมดปะทะ เอาชนะศัตรูอย่างราบคาบในเวลาอันสั้น"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "とびはねる",
			'zh-tw': "彈跳",
			th: "เด้งกลับ"
		},

		damage: 30,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "パニッシュキック",
			'zh-tw': "懲罰之踢",
			th: "พันนิชคิก"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×40ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×40點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x40"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card