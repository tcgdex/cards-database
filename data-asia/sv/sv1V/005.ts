import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ビビヨン",
		'zh-tw': "彩粉蝶",
		th: "วิวิญอง",
		id: "Vivillon"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [666],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "花咲く 土地で 生まれた。 色鮮やかな 毒の りんぷんを 翅から 散らして 戦う。",
		th: "เกิดในบริเวณที่ดอกไม้บานสะพรั่ง ต่อสู้โดยการโปรยเกล็ดพิษสีสดใสออกมาจากปีก",
		id: "Vivillon yang terlahir di wilayah tempat bunga bermekaran. Pokémon ini bertarung dengan menyebarkan sisik toksik berwarna-warni dari sayapnya."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ミラクルパウダー",
			'zh-tw': "奇跡粉",
			th: "มิราเคิลพาวเดอร์",
			id: "Miracle Powder"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、特殊状態の中から1つ選び、相手のバトルポケモンをその状態にする。",
			'zh-tw': "擲1次硬幣若為正面，則從特殊狀態中選擇1種，將對手的戰鬥寶可夢處於那個狀態。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือก 1 สภาวะจากสภาวะผิดปกติ ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะผิดปกตินั้น",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 di antara Kondisi Khusus, lalu ubah kondisi Pokémon Bertarung lawan menjadi kondisi tersebut."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "むしのさざめき",
			'zh-tw': "蟲鳴",
			th: "เสียงฮัมของแมลง",
			id: "Dengungan Serangga"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card