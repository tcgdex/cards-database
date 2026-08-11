import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "タマンチュラ",
		'zh-tw': "團珠蛛",
		'th-th': "ทามันทูล่า",
		'id-id': "Tarountula"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [917],
	hp: 40,
	types: ["Grass"],

	description: {
		'ja-jp': "お尻から 出す 糸は ワイヤーに 匹敵する 強度。 強さの 秘密が 研究されているのだ。",
		'zh-tw': "從臀部射出的絲線，強度足以與金屬絲匹敵。 強度的秘密仍在研究中。",
		'th-th': "ใยที่ออกมาจากก้นนั้นแข็งแรงพอ ๆ กับเส้นลวด ความลับของความแข็งแกร่งนั้นยังถูกค้นคว้าอยู่",
		'id-id': "Kekuatan benang yang dikeluarkan Tarountula dari belakangnya sebanding dengan kawat. Rahasia kekuatan benangnya sedang diteliti."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "いとをはく",
			'zh-tw': "吐絲",
			'th-th': "พ่นไหม",
			'id-id': "Memuntahkan Benang"
		},

		damage: 20,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693080,
				tcgplayer: 568232,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card