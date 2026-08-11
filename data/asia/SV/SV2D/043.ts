import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ケケンカニ",
		'zh-tw': "好勝毛蟹",
		'th-th': "เคเค็นคานิ",
		'id-id': "Crabominable"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [740],
	hp: 160,
	types: ["Fighting"],

	description: {
		'ja-jp': "もげた ハサミは とても 美味しい。 わざわざ 山に グルトンを 連れて 探しにくる トレーナーも いるぞ。",
		'zh-tw': "脫落的鉗子十分美味。還有些訓練家會特地 帶著愛吃豚到山裡找牠。",
		'th-th': "ก้ามที่หลุดออกมาอร่อยมาก ถึงขนาดมีเทรนเนอร์พากูร์ตงไปตามหาในป่า",
		'id-id': "Capit Crabominable yang patah sangat lezat. Bahkan sampai ada pelatih yang membawa Lechonk ke gunung untuk mencari Pokémon ini."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'ja-jp': "がちんこ",
			'zh-tw': "正面對決",
			'th-th': "ตั้งใจสู้",
			'id-id': "Menentang"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'ja-jp': "ナックルインパクト",
			'zh-tw': "關節衝擊",
			'th-th': "นัคเคิลอิมแพ็ค",
			'id-id': "Knuckle Impact"
		},

		damage: 170,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705347,
				tcgplayer: 565905,
			},
		},
	],

	retreat: 4,
	regulationMark: "G",
}

export default card