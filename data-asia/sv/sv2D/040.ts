import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "グレッグル",
		'zh-tw': "不良蛙",
		th: "กูเรกกรู",
		id: "Croagunk"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [453],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "毒袋を ふくらませて 鳴らし 辺りに 不気味な 音を 響かせ 相手が ひるむと どくづきをする。",
		'zh-tw': "會鼓起毒囊鳴叫。讓四周響起詭異的聲音， 等對手畏縮，便施以毒擊。",
		th: "จะทำให้ถุงพิษพองตัวแล้วส่งเสียงก้องที่น่าสะพรึงกลัวไปรอบ ๆ บริเวณ พอฝ่ายตรงข้ามรู้สึกหวาดกลัวก็จะโจมตีด้วยพิษ",
		id: "Croagunk menggelembungkan dan membunyikan kantong racunnya untuk mengeluarkan suara mengerikan ke sekelilingnya dan ketika lawan ketakutan, Pokémon ini menyerang dengan tusukan beracun."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "どくばり",
			'zh-tw': "毒針",
			th: "เหล็กในพิษ",
			id: "Jarum Beracun"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card