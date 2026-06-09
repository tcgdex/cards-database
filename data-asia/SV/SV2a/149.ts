import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カイリュー",
		'zh-tw': "快龍",
		th: "ไคริว",
		id: "Dragonite"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 180,
	types: ["Dragon"],

	description: {
		ja: "広い 海の どこかには カイリューだけが 集まって 暮らす 島が あるらしい。",
		'zh-tw': "在廣大海洋的某處，似乎存在著只群居著 快龍的島。",
		th: "เหมือนจะมีเกาะสักแห่งในทะเลแสนกว้างใหญ่ที่มีแต่เหล่าไคริวอาศัยอยู่",
		id: "Kabarnya pada suatu tempat di laut yang luas, terdapat pulau yang hanya ditempati oleh kumpulan Dragonite."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ジェットクルーズ",
			'zh-tw': "噴射巡航",
			th: "เจ็ตครูส",
			id: "Jet Cruise"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のポケモン全員のにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢【撤退】所需的能量全部消除。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนฝ่ายเราทุกตัว ทั้งหมดจะหายไป",
			id: "Selama Pokémon ini ada di Arena, semua Pokémon sendiri menjadi tidak membutuhkan Energi untuk Mundur."
		}
	}],

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			ja: "りゅうのはどう",
			'zh-tw': "龍之波動",
			th: "คลื่นมังกร",
			id: "Aura Naga"
		},

		damage: 180,

		effect: {
			ja: "自分の山札を上から2枚トラッシュする。",
			'zh-tw': "將自己的牌庫上方2張卡丟棄。",
			th: "ทิ้งการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด",
			id: "Buang 2 kartu dari atas Deck sendiri ke Trash."
		}
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719602
	}
}

export default card