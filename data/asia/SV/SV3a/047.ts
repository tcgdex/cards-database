import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ギルガルド",
		'zh-tw': "堅盾劍怪",
		'th-th': "กิลการ์ด"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [681],
	hp: 150,
	types: ["Metal"],

	description: {
		'ja-jp': "強力な 霊力で 人や ポケモンを 操り ギルガルドに 都合の 良い 国を つくらせた。",
		'zh-tw': "堅盾劍怪曾經用強大的靈力控制人和寶可夢，建立了 適合自己生活的國家。",
		'th-th': "ควบคุมมนุษย์และโปเกมอนด้วยพลังวิญญาณอันแรงกล้าให้สร้างประเทศตามที่กิลการ์ดต้องการ"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "しんぴのたて",
			'zh-tw': "神秘之盾",
			'th-th': "โล่ลึกลับ"
		},

		effect: {
			'ja-jp': "このポケモンは、相手の「ポケモンex・V」からワザのダメージを受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【ex】・【V】」招式的傷害。",
			'th-th': "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จาก [โปเกมอน【ex】 /【V】] ฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'ja-jp': "ハードバッシュ",
			'zh-tw': "堅硬猛擊",
			'th-th': "ตีแรง"
		},

		damage: 120,

		effect: {
			'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			'th-th': "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด"
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

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 734286,
				tcgplayer: 566905,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card