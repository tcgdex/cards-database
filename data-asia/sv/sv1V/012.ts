import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "カプサイジ",
		'zh-tw': "熱辣娃",
		th: "แคปไซจิ",
		id: "Capsakid"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [951],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "パルデアの 郷土料理は 抜け落ちた カプサイジの 前歯が 使われているので 激辛なのだ。",
		'zh-tw': "帕底亞當地會用熱辣娃掉落的門牙來做料理， 所以超級無敵霹靂辣。",
		th: "อาหารท้องถิ่นของพัลเดียมีรสชาติเผ็ดมากเพราะใช้ฟันหน้าที่ร่วงหล่นของแคปไซจิเป็นวัตถุดิบ",
		id: "Rasa masakan khas Daerah Paldea sangat pedas karena dibuat menggunakan gigi depan Capsakid yang lepas."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ピリから",
			'zh-tw': "麻辣",
			th: "เผ็ดนิด ๆ",
			id: "Pedas Membakar"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【灼傷】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card