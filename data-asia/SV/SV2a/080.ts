import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドラン",
		'zh-tw': "呆殼獸",
		th: "ยาโดรัน",
		id: "Slowbro"
	},

	illustrator: "OKACHEKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [80],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "ヤドンが 海へ エサを 取りにいったとき シェルダーに 尻尾を かまれ ヤドランになった。",
		'zh-tw': "呆呆獸去海裡捕食時，被大舌貝咬住了尾巴， 於是就變成了呆殼獸。",
		th: "ยาดงโดนเชลเดอร์งับหางตอนออกไปหาอาหารแถวทะเลจนกลายเป็นยาโดรัน",
		id: "Ketika Slowpoke sedang mencari makan di laut, ekornya digigit oleh Shellder, lalu ia berevolusi menjadi Slowbro."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "おおあくび",
			'zh-tw': "大哈欠",
			th: "หาวปากกว้าง",
			id: "Menguap Lebar"
		},

		effect: {
			ja: "おたがいのバトルポケモンを、それぞれねむりにする。",
			'zh-tw': "將雙方的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย แต่ละตัวเป็นสภาวะ[หลับ]",
			id: "Ubah kondisi Pokémon Bertarung kedua pemain masing-masing menjadi Tidur."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "のんびりタックル",
			'zh-tw': "悠哉衝撞",
			th: "กระแทกเรื่อยเฉื่อย",
			id: "Serudukan Perlahan"
		},

		damage: 160,

		effect: {
			ja: "この番、このポケモンに進化していたなら、このワザは失敗。",
			'zh-tw': "在這個回合，若進化成這隻寶可夢，則這個招式失敗。",
			th: "เทิร์นนี้ ถ้าวิวัฒนาการเป็นโปเกมอนนี้แล้ว ท่าต่อสู้นี้จะล้มเหลว",
			id: "Jika pada giliran ini, Pokémon berevolusi menjadi Pokémon ini, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card