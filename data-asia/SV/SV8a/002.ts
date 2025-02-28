import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "リーフィア",
		id: "Leafeon",
		th: "ลีเฟีย",
		'zh-tw': "葉伊布",
		'zh-cn': "葉伊布"
	},

	illustrator: "Iori Suzuki",
	rarity: "None",
	category: "Pokemon",
	dexId: [470],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "若い リーフィアほど ツンとくる 青臭い 匂い。 年老いると 落ち葉のような 匂いになる。",
		id: "Makin muda Leafeon, makin kuat aroma daun mudanya. Seiring dengan pertambahan umur, aroma Pokémon ini menjadi seperti bau daun gugur.",
		th: "ลีเฟียนั้นยิ่งอ่อนเยาว์จะยิ่งเหม็นเขียวแสบจมูก พอเริ่มมีอายุมากขึ้นจะมีกลิ่นเหมือนใบไม้ร่วง",
		'zh-tw': "越是年幼的葉伊布， 越是有刺鼻的青草味。 年老後就會變成好像落葉的味道。",
		'zh-cn': "越是年幼的葉伊布， 越是有刺鼻的青草味。 年老後就會變成好像落葉的味道。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "わかばのめぐみ",
			id: "Berkah Daun Muda",
			th: "พรจากใบอ่อน",
			'zh-tw': "嫩葉之恩",
			'zh-cn': "嫩葉之恩"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を1枚選び、ベンチポケモンにつける。その後、つけたポケモンのHPをすべて回復する。",
			id: "Pilih 1 lembar Energi Dasar {Daun} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon Cadangan. Setelah itu, pulihkan HP Pokémon yang telah dikenakan Energi sepenuhnya.",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนบนเบนช์ หลังจากนั้น ฟื้นฟู HP ทั้งหมดของโปเกมอนที่ติดการ์ดนั้น",
			'zh-tw': "從自己的手牌選擇1張「基本【草】能量」卡，附於備戰寶可夢身上。然後，將附上這些卡的寶可夢的HP全部恢復。",
			'zh-cn': "從自己的手牌選擇1張「基本【草】能量」卡，附於備戰寶可夢身上。然後，將附上這些卡的寶可夢的HP全部恢復。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ソーラービーム",
			id: "Solar Beam",
			th: "โซลาร์บีม",
			'zh-tw': "日光束",
			'zh-cn': "日光束"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card