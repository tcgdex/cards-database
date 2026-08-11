import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リキキリン",
		'zh-tw': "奇麒麟",
		'th-th': "ริกิคิริน"
	},

	illustrator: "Dsuke",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [981],
	hp: 140,
	types: ["Psychic"],

	description: {
		'ja-jp': "硬い テールヘッドで 本体の 頭を 守りつつ 長い 首を 振りまわして 頭突きを 食らわせる。",
		'zh-tw': "會用堅硬的尾巴頭保護著 本體的頭，並揮甩長長的 脖子讓對手吃牠一記頭錘。",
		'th-th': "ขณะปกป้องหัวของร่างหลักด้วยหัวสุดแข็งตรงหาง ก็จะแกว่งคอที่ยาวของมันเพื่อเอาหัวพุ่งชนอีกฝ่าย"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ミッドランブル",
			'zh-tw': "中級轟鳴",
			'th-th': "มิดเดิลรัมเบิล"
		},

		damage: "40×",

		effect: {
			'ja-jp': "自分の場の1進化ポケモンの数×40ダメージ。",
			'zh-tw': "造成自己的場上【1階進化】寶可夢的數量×40點傷害。",
			'th-th': "แดเมจจะเท่ากับจำนวนโปเกมอน[ร่าง1] บนกระดานฝ่ายเรา x40"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ぶきみなねんぱ",
			'zh-tw': "不祥波動",
			'th-th': "คลื่นแปลกประหลาด"
		},

		damage: 80,

		effect: {
			'ja-jp': "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761495,
				tcgplayer: 566090,
			},
		},
	],

	retreat: 2,
	regulationMark: "H"
}

export default card