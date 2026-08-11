import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シルシュルー",
		'zh-tw': "滋汁鼴",
		'th-th': "ชิรุชูลู",
		'id-id': "Shroodle"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [944],
	hp: 50,
	types: ["Darkness"],

	description: {
		'ja-jp': "温厚だが 怒らせると 毒が 染みこんだ 鋭い 前歯で 咬みつき 痺れさせてくるぞ。",
		'zh-tw': "雖然性情溫馴，但一旦被激怒，就會用滲入了毒素的尖銳門牙 過來咬住你，讓你全身麻痺不已。",
		'th-th': "มีนิสัยอ่อนโยน แต่ถ้าโกรธขึ้นมาจะใช้ฟันหน้าอันแหลมคมที่ชุ่มไปด้วยพิษกัดและทำให้อีกฝ่ายตัวชา",
		'id-id': "Walaupun ramah, Shroodle akan menggigit dan melumpuhkan siapa pun yang membuatnya marah dengan gigi depan tajam berlumur racun miliknya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "きのみさがし",
			'zh-tw': "搜尋樹果",
			'th-th': "ค้นหาผลไม้",
			'id-id': "Mencari Beri"
		},

		effect: {
			'ja-jp': "自分のトラッシュから基本エネルギーを1枚選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇1張基本能量卡，在給對手看過後加入手牌。",
			'th-th': "เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
			'id-id': "Pilih 1 lembar Energi Dasar dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'ja-jp': "ひっかく",
			'zh-tw': "抓",
			'th-th': "ข่วน",
			'id-id': "Menggaruk"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705357,
				tcgplayer: 565915,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card