import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "イルカマン",
		'zh-tw': "海豚俠",
		th: "อิรุกะแมน",
		id: "Palafin"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [964],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "太古の 遺伝子が 覚醒。 片ヒレで クルーズ船を 軽々 持ち上げる 怪力の 持ち主。",
		'zh-tw': "太古基因覺醒之後的樣子。力氣很大，只用單邊的鰭 也可以輕輕鬆鬆舉起遊輪。",
		th: "พันธุกรรมโบราณถูกปลุกขึ้นมา มีพละกำลังมหาศาลที่สามารถยกเรือสำราญได้อย่างสบาย ๆ ด้วยครีบเพียงข้างเดียว",
		id: "Gen zaman purba Pokémon ini telah bangkit. Palafin memiliki tenaga super yang membuatnya dapat mengangkat kapal pesiar menggunakan satu siripnya dengan mudah."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ジェットパンチ",
			'zh-tw': "噴射拳",
			th: "หมัดไอพ่น",
			id: "Pukulan Jet"
		},

		damage: 30,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "ジャスティスキック",
			'zh-tw': "正義踢",
			th: "ลูกเตะแห่งความยุติธรรม",
			id: "Justice Kick"
		},

		damage: 210,

		effect: {
			ja: "この番、このポケモンがベンチからバトル場に出ていないなら、このワザは失敗。",
			'zh-tw': "在這個回合，若沒有從備戰區將這隻寶可夢放置於戰鬥場，則這個招式失敗。",
			th: "เทิร์นนี้ ถ้าโปเกมอนนี้ไม่ได้ออกจากเบนช์มาที่ตำแหน่งต่อสู้ ท่าต่อสู้นี้จะล้มเหลว",
			id: "Jika pada giliran ini, Pokémon ini tidak masuk dari Cadangan ke Arena Bertarung, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card