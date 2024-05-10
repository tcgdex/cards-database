import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴチミル",
		'zh-tw': "哥德小童",
		th: "โกธิมิรุ",
		id: "Gothorita"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	dexId: [575],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "催眠術で 子どもを 眠らせ 連れ去ってしまう。 星明りが きらめく 夜には 注意しろ。",
		'zh-tw': "一定要小心星光閃閃的夜晚。因為牠會帶走被牠施了 催眠術而睡著的小孩。",
		th: "จะสะกดจิตให้เด็กหลับแล้วพาตัวไป เพราะฉะนั้นให้ระวังคืนที่ดาวระยิบระยับให้ดี",
		id: "Gothorita menghipnotis anak-anak agar tertidur lalu menculik mereka. Berhati-hatilah pada malam saat bintang bersinar."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "サイコトリップ",
			'zh-tw': "精神歪曲",
			th: "ไซโคทริป",
			id: "Psychotrip"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ちょうねんりき",
			'zh-tw': "超念力",
			th: "ซูเปอร์โทรจิต",
			id: "Psikokinesis Super"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card