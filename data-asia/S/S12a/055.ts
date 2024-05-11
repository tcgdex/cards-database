import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝沙奈朵",
		th: "เรเดียนต์เซอไนท์",
		ja: "かがやくサーナイト"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "有著預知未來的能力。在保護訓練家的時候， 會發揮出最強的力量。",
		th: "มีพลังในการทำนายอนาคต เวลาปกป้องเทรนเนอร์จะสามารถปล่อยพลังงานสูงสุดออกมาได้",
		ja: "未来を 予知する 力を もつ。 トレーナーを 守る ときに 最大 パワーを 発揮する。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "慈藹之幕",
			th: "ม่านแห่งความเมตตา",
			ja: "じあいのヴェール"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的「寶可夢【V】」招式的傷害「-20」點。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนฝ่ายเราทุกตัว แดเมจจากท่าต่อสู้ที่ได้รับจาก [โปเกมอน【V】] ฝ่ายตรงข้าม จะถูก [-20]",
			ja: "このポケモンがいるかぎり、自分のポケモン全員が、相手の「ポケモンV」から受けるワザのダメージは「-20」される。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神強念",
			th: "ไซโคคิเนซิส",
			ja: "サイコキネシス"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x20",
			ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ追加。"
		},

		damage: "70＋",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	dexId: [282]
}

export default card