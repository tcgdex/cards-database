import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドキング",
		'zh-tw': "尼多王",
		th: "นิโดคิง",
		id: "Nidoking"
	},

	illustrator: "Shiburingaru",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [34],
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "力自慢の ポケモン。 太い 尻尾と ダイヤをも 砕く ツノを 駆使して 豪快に 戦う。",
		'zh-tw': "以力氣為傲的寶可夢。會善用粗壯的尾巴和連鑽石 也能擊碎的角，豪邁地戰鬥。",
		th: "เป็นโปเกมอนที่ภาคภูมิใจในพละกำลัง ใช้หางอ้วน ๆ กับเขาที่ทุบบดแม้กระทั่งเพชรได้อย่างชำนาญ และต่อสู้อย่างฮึกเหิม",
		id: "Pokémon yang bangga pada kekuatannya. Nidoking menggunakan ekornya yang tebal dan tanduknya yang mampu menghancurkan intan sekalipun secara maksimal untuk bertarung dengan penuh antusias."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はりきりキング",
			'zh-tw': "活力王者",
			th: "ราชาฮึกเหิม",
			id: "Raja Antusias"
		},

		effect: {
			ja: "自分の場に「ニドクイン」がいるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
			'zh-tw': "若自己的場上有「尼多后」，則這隻寶可夢使用招式所需的能量全部消除。",
			th: "ถ้าบนกระดานฝ่ายเรามี [นิโดควีน] อยู่ พลังงานสำหรับใช้ท่าต่อสู้ของโปเกมอนนี้ ทั้งหมดจะหายไป",
			id: "Jika ada Nidoqueen di Arena sendiri, Pokémon ini menjadi tidak membutuhkan Energi untuk menggunakan serangan."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムインパクト",
			'zh-tw': "毒液衝撞",
			th: "เวนอมอิมแพกต์",
			id: "Venom Impact"
		},

		damage: 190,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card