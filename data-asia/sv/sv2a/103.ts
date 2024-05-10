import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナッシー",
		'zh-tw': "椰蛋樹",
		th: "นัชชี",
		id: "Exeggutor"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "３つの 頭が 一丸となって 撃つ サイコパワーは 強力。 空が 曇ると 動きが 鈍る。",
		'zh-tw': "３顆頭團結一致發出的精神力量威力強大。天氣 變陰時動作就會變得遲緩。",
		th: "พลังจิตที่หัวทั้ง 3 หัวรวมใจเป็นหนึ่งเดียวปล่อยออกมานั้นมีพลังแรง วันที่มีเมฆมากจะเคลื่อนไหวช้า",
		id: "Kekuatan psikokinesis yang ditembakkan saat 3 kepala Exeggutor bekerja sama sangat kuat. Gerakannya menjadi lambat saat langit berawan."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "サイコキネシス",
			'zh-tw': "精神強念",
			th: "ไซโคคิเนซิส",
			id: "Psikis"
		},

		damage: "30+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "ぶちかます",
			'zh-tw': "頭突",
			th: "ตบหนัก",
			id: "Hantaman Penuh Tenaga"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card