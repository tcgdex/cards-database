import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ポリゴン",
		'zh-tw': "多邊獸",
		th: "โพรีกอน",
		id: "Porygon"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	dexId: [137],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "近年は 電脳空間で 大活躍。 怪しい データが ないか チェックして まわっている。",
		'zh-tw': "近年在電腦空間大展身手。會四處巡邏查看 有沒有可疑的資料。",
		th: "หลายปีที่ผ่านมา มันมีบทบาทอย่างมากในไซเบอร์สเปซ คอยตระเวนตรวจสอบว่ามีข้อมูลน่าสงสัยหรือไม่",
		id: "Belakangan Porygon berperan besar di dunia maya. Pokémon ini berkeliling mengecek untuk memastikan tidak ada data yang mencurigakan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "テクスチャー4",
			'zh-tw': "紋理4",
			th: "เปลี่ยนสภาพ 4",
			id: "Texture 4"
		},

		effect: {
			ja: "の中からタイプを1つ選ぶ。このワザを受けたポケモンの弱点は、選んだタイプになる。この効果は、このワザを受けたポケモンがバトル場をはなれるまで続く。［弱点は「×2」でダメージ計算をする。］",
			'zh-tw': "從【草】【火】【水】【雷】【超】【鬥】【惡】【鋼】【龍】中選擇1個屬性。受到這個招式的寶可夢弱點改為所選的屬性。這個效果在受到這個招式的寶可夢離開戰鬥場前一直持續。［弱點以「×2」計算傷害。］",
			th: "เลือก 1 ประเภทจาก[หญ้า] [ไฟ] [น้ำ] [สายฟ้า] [พลังจิต] [ต่อสู้] [ความมืด] [โลหะ] [มังกร] จุดอ่อนของโปเกมอนที่ได้รับท่าต่อสู้นี้ จะเป็นประเภทที่เลือก เอฟเฟกต์นี้ จะต่อเนื่องไปจนกว่าโปเกมอนที่ได้รับท่าต่อสู้นี้จะออกจากตำแหน่งต่อสู้ {จุดอ่อน คำนวณแดเมจ x2}",
			id: "Pilih 1 tipe di antara {Daun}, {Api}, {Air}, {Listrik}, {Psychic}, {Petarung}, {Kegelapan}, {Logam}, dan {Naga}. Kelemahan Pokémon yang menerima serangan ini menjadi tipe yang telah dipilih. Efek ini terus berlanjut hingga Pokémon yang menerima serangan ini meninggalkan Arena Bertarung. [Perhitungan kerusakan dari tipe yang menjadi Kelemahan adalah 2 kali lipat.]"
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