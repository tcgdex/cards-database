import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニンフィア",
		id: "Sylveon",
		th: "นิมเฟีย",
		'zh-tw': "仙子伊布",
		'zh-cn': "仙子伊布"
	},

	illustrator: "Susumu Maeya",
	rarity: "None",
	category: "Pokemon",
	dexId: [700],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "触角を なびかせ 軽やかに 舞う 姿は 優雅だが 技は 鋭く 急所を 狙う。",
		id: "Sosok Sylveon yang menari dan mengibarkan antenanya dengan luwes terlihat begitu anggun, namun serangan Pokémon ini mengincar titik kritis lawan dengan akurat.",
		th: "หนวดสัมผัสพลิ้วไหวไปตามการเคลื่อนไหวที่ปราดเปรียวและสง่างาม แต่การโจมตีของมันนั้นเฉียบคมและเล็งตรงไปยังจุดอ่อน",
		'zh-tw': "搖曳著觸角跳著輕快 舞蹈的樣子相當優雅， 但招式卻會直搗對手要害。",
		'zh-cn': "搖曳著觸角跳著輕快 舞蹈的樣子相當優雅， 但招式卻會直搗對手要害。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ミスティックリターン",
			id: "Mystic Return",
			th: "มิสติกรีเทิร์น",
			'zh-tw': "奧密迴旋",
			'zh-cn': "奧密迴旋"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、相手の山札にもどして切る。",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Pokémon Cadangan lawan, lalu kocok kembali Pokémon tersebut dan semua kartu yang dikenakannya ke Deck lawan.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว นำโปเกมอนนั้น และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ",
			'zh-tw': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，將那隻寶可夢與附加的卡全部放回對手的牌庫並重洗。",
			'zh-cn': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，將那隻寶可夢與附加的卡全部放回對手的牌庫並重洗。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "チャームボイス",
			id: "Charm Voice",
			th: "เสียงทรงเสน่ห์",
			'zh-tw': "魅惑之聲",
			'zh-cn': "魅惑之聲"
		},

		damage: 90,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card