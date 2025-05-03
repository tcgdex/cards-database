import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ギルガルド",
		id: "Aegislash",
		th: "กิลการ์ด",
		'zh-tw': "堅盾劍怪",
		'zh-cn': "堅盾劍怪"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "None",
	category: "Pokemon",
	dexId: [681],
	hp: 150,
	types: ["Metal"],

	description: {
		ja: "強力な 霊力で 人や ポケモンを 操り ギルガルドに 都合の 良い 国を つくらせた。",
		id: "Aegislash dengan kekuatan spiritualnya yang kuat mengendalikan manusia dan Pokémon untuk membuat negara yang menguntungkan baginya.",
		th: "กิลการ์ดเคยควบคุมมนุษย์และโปเกมอนด้วยพลังวิญญาณที่แข็งแกร่งเพื่อ ให้สร้างดินแดนตามที่มันต้องการ",
		'zh-tw': "堅盾劍怪曾經用強大的靈力 控制人和寶可夢，建立了 適合自己生活的國家。",
		'zh-cn': "堅盾劍怪曾經用強大的靈力 控制人和寶可夢，建立了 適合自己生活的國家。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しんぴのたて",
			id: "Perisai Mistis",
			th: "โล่ลึกลับ",
			'zh-tw': "神秘之盾",
			'zh-cn': "神秘之盾"
		},

		effect: {
			ja: "このポケモンは、相手の「ポケモンex・V」からワザのダメージを受けない。",
			id: "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon {ex}/{V} lawan.",
			th: "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จาก [โปเกมอน【ex】 /【V】] ฝ่ายตรงข้าม",
			'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【ex】・【V】」招式的傷害。",
			'zh-cn': "這隻寶可夢不會受到對手的「寶可夢【ex】・【V】」招式的傷害。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "ハードバッシュ",
			id: "Hard Bash",
			th: "ตีแรง",
			'zh-tw': "堅硬猛擊",
			'zh-cn': "堅硬猛擊"
		},

		damage: 120,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan.",
			th: "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้ามมาคิด",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			'zh-cn': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card