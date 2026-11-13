import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ベラカス",
		'zh-tw': "蟲甲聖",
		th: "เบราคาสุ",
		id: "Rabsca"
	},

	illustrator: "Oswaldo KATO",
	rarity: "None",
	category: "Pokemon",
	dexId: [954],
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		ja: "シガロコ"
	},

	description: {
		ja: "玉を 支える 体は ほとんど 動かないため 本体は 玉の中にいると 考えられている。",
		'zh-tw': "支撐球的身體幾乎不動，因此人們認為牠的本體 其實是在球裡面。",
		th: "เนื่องจากร่างกายที่แบกรับลูกบอลนั้นแทบจะไม่ขยับเลย จึงเชื่อกันว่าร่างหลักของมันอยู่ภายในลูกบอล",
		id: "Karena tubuh yang menyokong bolanya hampir tidak pernah bergerak, diduga tubuh asli Rabsca berada di dalam bolanya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "さいきのいのり",
			'zh-tw': "復生祈禱",
			th: "พรแห่งการฟื้นคืน",
			id: "Doa Kebangkitan"
		},

		effect: {
			ja: "自分のトラッシュからポケモンを1枚選び、ベンチに出す。",
			'zh-tw': "從自己的棄牌區選擇1張寶可夢卡，放置於備戰區。",
			th: "เลือกการ์ดโปเกมอน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา วางบนเบนช์",
			id: "Pilih 1 lembar Pokémon dari Trash sendiri, lalu masukkan ke Cadangan."
		},
		cost: ["Colorless"]
	}, {
		name: {
			ja: "サイケこうせん",
			'zh-tw': "幻象光線",
			th: "ลำแสงพลังจิต",
			id: "Sinar Psikedelik"
		},

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 50,
		cost: ["Psychic", "Psychic"]
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
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746474,
				tcgplayer: 567493,
				cardtrader: 269696,
			},
		},
	]
}

export default card