import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "プリン",
		'zh-tw': "胖丁",
		'th-th': "พูริน",
		'id-id': "Jigglypuff"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [39],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "つぶらな 瞳が 揺れるとき 眠たくなるような 不思議で 気持ちのいい 歌を 歌う。",
		'zh-tw': "當牠圓圓的大眼睛轉動時，就會唱起奇妙的歌曲， 讓人舒服地昏昏欲睡。",
		'th-th': "เมื่อตากลมโตสั่นไหว จะร้องเพลงที่ทำให้ง่วงนอนและรู้สึกดีอย่างน่าประหลาด",
		'id-id': "Jigglypuff menyanyikan lagu ajaib yang menenangkan dan membuat siapa pun jadi mengantuk ketika mata bulatnya bergerak."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "うたう",
			'zh-tw': "唱歌",
			'th-th': "ร้องเพลง",
			'id-id': "Menyanyi"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "ビンタ",
			'zh-tw': "巴掌",
			'th-th': "ตบ",
			'id-id': "Menampar"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705330,
				tcgplayer: 565888,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card