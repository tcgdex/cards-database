import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "グレッグル",
		'zh-tw': "不良蛙",
		'th-th': "กูเรกกรู",
		'id-id': "Croagunk"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [453],
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "毒袋を ふくらませて 鳴らし 辺りに 不気味な 音を 響かせ 相手が ひるむと どくづきをする。",
		'zh-tw': "會鼓起毒囊鳴叫。讓四周響起詭異的聲音， 等對手畏縮，便施以毒擊。",
		'th-th': "จะทำให้ถุงพิษพองตัวแล้วส่งเสียงก้องที่น่าสะพรึงกลัวไปรอบ ๆ บริเวณ พอฝ่ายตรงข้ามรู้สึกหวาดกลัวก็จะโจมตีด้วยพิษ",
		'id-id': "Croagunk menggelembungkan dan membunyikan kantong racunnya untuk mengeluarkan suara mengerikan ke sekelilingnya dan ketika lawan ketakutan, Pokémon ini menyerang dengan tusukan beracun."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "どくばり",
			'zh-tw': "毒針",
			'th-th': "เหล็กในพิษ",
			'id-id': "Jarum Beracun"
		},

		damage: 10,

		effect: {
			'ja-jp': "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
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
				cardmarket: 705344,
				tcgplayer: 565902,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card