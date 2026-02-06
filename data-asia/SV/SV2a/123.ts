import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ストライク",
		'zh-tw': "飛天螳螂",
		th: "สไตรค์",
		id: "Scyther"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [123],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "切れ味 鋭い カマを 使って 草むらを 切り進む。 あまりに 速い 動きで 目が 追いつかない。",
		'zh-tw': "會用鋒利的鐮刀割開草叢前進。因為動作實在太快， 甚至無法用肉眼看清。",
		th: "ใช้เคียวคมกริบถางหญ้าที่ขวางทาง เคลื่อนไหวได้เร็วจนมองตามไม่ทัน",
		id: "Scyther melaju sambil memotong rerumputan menggunakan sabit tajamnya. Pergerakannya tidak bisa diikuti karena terlalu cepat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "アシストスラッシュ",
			'zh-tw': "輔助斬",
			th: "แอสซิสต์สแลช",
			id: "Assist Slash"
		},

		damage: 20,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、ベンチポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇1張「基本【草】能量」卡，附於備戰寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
			id: "Pilih 1 lembar Energi Dasar {Daun} dari Trash sendiri, lalu kenakan pada Pokémon Cadangan."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "スライスブレード",
			'zh-tw': "利刃切割",
			th: "สไลซ์เบลด",
			id: "Slicing Blade"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719576
	}
}

export default card