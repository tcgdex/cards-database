import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ハラバリーex",
		'zh-tw': "電肚蛙ex",
		th: "ฮาราบารีex",
		id: "Bellibolt ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ジャンププレス",
			'zh-tw': "跳躍壓制",
			th: "จัมป์เพรส",
			id: "Jump Press"
		},

		effect: {
			ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจ 50 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini memberikan kerusakan sejumlah 50 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "パラライズボール",
			'zh-tw': "麻痺球",
			th: "พาราไลซ์บอล",
			id: "Paralyze Ball"
		},

		damage: 160,

		effect: {
			ja: "のぞむなら、このポケモンについているエネルギーを2個トラッシュし、相手のバトルポケモンをマヒにする。",
			'zh-tw': "若希望，將2個這隻寶可夢身上附加的【雷】能量丟棄，將對手的戰鬥寶可夢【麻痺】。",
			th: "หากต้องการ ทิ้งพลังงาน[สายฟ้า]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูกที่ตำแหน่งทิ้งการ์ด ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Pemain dapat membuang 2 Energi {Listrik} yang dikenakan pada Pokémon ini ke Trash, lalu ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card