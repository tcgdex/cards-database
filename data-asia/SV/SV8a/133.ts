import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "バッフロン",
		id: "Bouffalant",
		th: "บัฟฟรอน",
		'zh-tw': "爆炸頭水牛",
		'zh-cn': "爆炸頭水牛"
	},

	illustrator: "Tonji Matsuno",
	rarity: "None",
	category: "Pokemon",
	dexId: [626],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "頭突きだけで 車を 潰す。 頭の 毛が 大きいほど 群れでの 地位が 上がるのだ。",
		id: "Bouffalant dapat menghancurkan mobil cukup dengan serudukan kepalanya. Makin besar rambut di kepalanya, makin tinggi pula posisinya di antara kelompoknya.",
		th: "เพียงแค่พุ่งหัวชนก็สามารถบดทำลายรถยนต์ได้ ยิ่งมีขนที่หัวมากก็ยิ่งได้รับการยอมรับจากพวกพ้องในฝูง",
		'zh-tw': "只用頭錘就能壓扁汽車。 頭部的那團毛越大一團， 在群體裡的地位就會越高。",
		'zh-cn': "只用頭錘就能壓扁汽車。 頭部的那團毛越大一團， 在群體裡的地位就會越高。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "カーリーウォール",
			id: "Curly Wall",
			th: "เคอร์ลีวอลล์",
			'zh-tw': "‌捲牆",
			'zh-cn': "‌捲牆"
		},

		effect: {
			ja: "このポケモンと、自分の別の「バッフロン」がいるかぎり、自分のタイプのたねポケモン全員が、相手のポケモンから受けるワザのダメージは「-60」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			id: "Selama Pokémon ini dan Bouffalant sendiri lainnya ada di Arena, kerusakan akibat serangan dari Pokémon lawan yang diterima semua Pokémon Basic tipe {Bening} sendiri berkurang sejumlah 60. Efek ini tidak berlaku kelipatan meskipun ada Pokémon lain yang memiliki Ability yang sama.",
			th: "ตราบใดที่โปเกมอนนี้และ [บัฟฟรอน] ตัวอื่นของฝ่ายเรายังอยู่ แดเมจของท่าต่อสู้ที่โปเกมอน[พื้นฐาน]ประเภท[ไร้สี]ฝ่ายเราทุกตัว จะได้รับจากโปเกมอนฝ่ายตรงข้ามจะถูก [-60] แม้จะมีโปเกมอนที่มีความสามารถนี้กี่ตัวก็ตาม เอฟเฟกต์นี้จะไม่เกิดผลซ้ำ",
			'zh-tw': "只要這隻寶可夢與自己的其他「爆炸頭水牛」在場上，自己的所有【無】屬性的【基礎】寶可夢受到對手的寶可夢招式的傷害「-60」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			'zh-cn': "只要這隻寶可夢與自己的其他「爆炸頭水牛」在場上，自己的所有【無】屬性的【基礎】寶可夢受到對手的寶可夢招式的傷害「-60」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "そこぢから",
			id: "Kekuatan Laten",
			th: "พลังแฝง",
			'zh-tw': "潛力",
			'zh-cn': "潛力"
		},

		damage: 130,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card