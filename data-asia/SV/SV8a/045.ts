import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "イルカマン",
		id: "Palafin",
		th: "อิรุกะแมน",
		'zh-tw': "海豚俠",
		'zh-cn': "海豚俠"
	},

	illustrator: "Ligton",
	rarity: "None",
	category: "Pokemon",
	dexId: [964],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "身体能力は ナミイルカと 変わらないが 仲間の ピンチには 変身して パワーアップするぞ。",
		id: "Kemampuan fisiknya tidak jauh berbeda dari Finizen, tetapi Palafin akan berubah wujud dan meningkatkan kekuatannya ketika kawannya berada dalam bahaya.",
		th: "ความสามารถทางกายภาพนั้นไม่ต่างจากนามิอิรุกะ แต่เมื่อเพื่อนพ้องตกอยู่ในอันตรายจะแปลงร่างและแข็งแกร่งขึ้น",
		'zh-tw': "體能與波普海豚不相上下， 但一旦夥伴陷入了危機， 就會變身來提高自己的力量。",
		'zh-cn': "體能與波普海豚不相上下， 但一旦夥伴陷入了危機， 就會變身來提高自己的力量。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マイティチェンジ",
			id: "Menjadi Perkasa",
			th: "แปลงร่างขั้นสุดยอด",
			'zh-tw': "全能變身",
			'zh-cn': "全能變身"
		},

		effect: {
			ja: "自分の番に、このポケモンがバトル場からベンチにもどったとき、1回使える。自分の山札から「イルカマンex」を1枚選び、このカードと入れ替える（ついているカード・ダメカン・特殊状態・効果などは、すべて引きつぐ）。入れ替えたなら、このカードは山札にもどす。そして山札を切る。",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat Pokémon ini kembali dari Arena Bertarung ke Cadangan. Pilih 1 lembar Palafin {ex} dari Deck sendiri, lalu tukar dengan kartu ini (Semua kartu yang dikenakan, Token Kerusakan, Kondisi Khusus, efek yang dialami, dan lainnya diteruskan ke Pokémon tersebut). Jika ditukar, kembalikan kartu ini ke Deck. Kemudian, kocok Deck.",
			th: "ในเทิร์นฝ่ายเรา เมื่อโปเกมอนนี้ออกจากตำแหน่งต่อสู้กลับมาบนเบนช์ ใช้ได้ 1 ครั้ง เลือกการ์ด [อิรุกะแมน【ex】] 1 ใบจากสำรับการ์ดฝ่ายเรา สลับกับการ์ดนี้ (การ์ดที่ติดอยู่ ตัวนับแดเมจ สภาวะผิดปกติ เอฟเฟกต์ทั้งหมดยังคงอยู่ต่อไป) ถ้าสลับแล้ว นำการ์ดนี้ใส่กลับไปในสำรับการ์ด แล้วสับสำรับการ์ด",
			'zh-tw': "在自己的回合，這隻寶可夢從戰鬥場回到備戰區時，可使用1次。從自己的牌庫選擇1張「海豚俠【ex】」，與這張卡互換（所附加的卡・傷害指示物・特殊狀態・效果等全部保留）。若互換了，則這張卡放回牌庫。並且重洗牌庫。",
			'zh-cn': "在自己的回合，這隻寶可夢從戰鬥場回到備戰區時，可使用1次。從自己的牌庫選擇1張「海豚俠【ex】」，與這張卡互換（所附加的卡・傷害指示物・特殊狀態・效果等全部保留）。若互換了，則這張卡放回牌庫。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "スプラッシュ",
			id: "Splash",
			th: "สแปลช",
			'zh-tw': "飛濺",
			'zh-cn': "飛濺"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card