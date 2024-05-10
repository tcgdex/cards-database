import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "タマンチュラ",
		'zh-tw': "團珠蛛",
		th: "ทามันทูล่า",
		id: "Tarountula"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [917],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "お尻から 出す 糸は ワイヤーに 匹敵する 強度。 強さの 秘密が 研究されているのだ。",
		'zh-tw': "從臀部射出的絲線，強度足以與金屬絲匹敵。 強度的秘密仍在研究中。",
		th: "ใยที่ออกมาจากก้นนั้นแข็งแรงพอ ๆ กับเส้นลวด ความลับของความแข็งแกร่งนั้นยังถูกค้นคว้าอยู่",
		id: "Kekuatan benang yang dikeluarkan Tarountula dari belakangnya sebanding dengan kawat. Rahasia kekuatan benangnya sedang diteliti."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "いとをはく",
			'zh-tw': "吐絲",
			th: "พ่นไหม",
			id: "Memuntahkan Benang"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card