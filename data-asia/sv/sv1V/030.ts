import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ロトム",
		'zh-tw': "洛托姆",
		th: "โรตอม",
		id: "Rotom"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [479],
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。",
		'zh-tw': "被當作驅動特殊馬達的動力源， 而被長期研究的寶可夢。",
		th: "เป็นโปเกมอนที่ถูกวิจัยมายาวนานในฐานะแหล่งพลังงานขับเคลื่อนมอเตอร์พิเศษ",
		id: "Rotom adalah Pokémon yang telah diteliti dalam jangka waktu panjang sebagai sumber tenaga penggerak motor khusus."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ジャンクハント",
			'zh-tw': "廢品搜尋",
			th: "จังก์ฮันท์",
			id: "Junk Hunt"
		},

		effect: {
			ja: "自分のトラッシュからグッズを1枚選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇1張物品卡，在給對手看過後加入手牌。",
			th: "เลือกการ์ดไอเท็ม 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
			id: "Pilih 1 lembar Item dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		}
	}, {
		cost: ["Lightning"],

		name: {
			ja: "でんきショック",
			'zh-tw': "電擊",
			th: "ช็อคไฟฟ้า",
			id: "Sengatan Listrik"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card