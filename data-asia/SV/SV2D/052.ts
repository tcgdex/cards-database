import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "バンギラス",
		'zh-tw': "班基拉斯",
		th: "บันกิราส",
		id: "Tyranitar"
	},

	illustrator: "hncl",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [248],
	hp: 180,
	types: ["Darkness"],

	description: {
		ja: "あたりの 地形を 変えるぐらい 朝飯前の 力持ち。 まわりを 気にしない ふてぶてしさ。",
		'zh-tw': "即便是改變周圍的地形也是小事一樁的大力士。 個性狂妄，不顧周遭的感受。",
		th: "มีพละกำลังขนาดเปลี่ยนธรณีสัณฐานรอบ ๆ ได้อย่างสบาย กล้าบ้าบิ่นไม่หวั่นเกรงใคร",
		id: "Tyranitar memiliki tenaga kuat yang dapat mengubah topografi di sekitarnya dengan mudah. Pokémon ini bersifat sombong yang tidak peduli akan sekitarnya."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "けちらす",
			'zh-tw': "踢散",
			th: "ไล่กระเจิง",
			id: "Membubarkan"
		},

		damage: "30+",

		effect: {
			ja: "相手のベンチポケモンの数×30ダメージ追加。",
			'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ฝ่ายตรงข้าม x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Pokémon Cadangan lawan."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "ドレッドマウンテン",
			'zh-tw': "忌憚山岳",
			th: "เดรดเมาน์เทน",
			id: "Dread Mountain"
		},

		damage: 230,

		effect: {
			ja: "自分の山札を上から4枚トラッシュする。",
			'zh-tw': "將自己的牌庫上方4張卡丟棄。",
			th: "ทิ้งการ์ด 4 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด",
			id: "Buang 4 kartu dari atas Deck sendiri ke Trash."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card