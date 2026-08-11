import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "グレッグル",
		'zh-tw': "不良蛙",
		'th-th': "กูเรกกรู",
		'id-id': "Croagunk"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [453],
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "毒袋を ふくらませて 鳴らし 辺りに 不気味な 音を 響かせ 相手が ひるむと どくづきをする。",
		'zh-tw': "會鼓起毒囊鳴叫。讓四周響起詭異的聲音， 等對手畏縮，便施以毒擊。",
		'th-th': "จะทำให้ถุงพิษพองตัวแล้วส่งเสียงก้องที่น่าสะพรึงกลัวไปรอบ ๆ บริเวณ พอฝ่ายตรงข้ามรู้สึกหวาดกลัวก็จะโจมตีด้วยพิษ",
		'id-id': "Croagunk menggelembungkan dan membunyikan kantong racunnya untuk mengeluarkan suara mengerikan ke sekelilingnya dan ketika lawan ketakutan, Pokémon ini menyerang dengan tusukan beracun."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "たたく",
			'zh-tw': "敲擊",
			'th-th': "ตี",
			'id-id': "Menghantam"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'ja-jp': "はりたおす",
			'zh-tw': "擊倒",
			'th-th': "ผลักล้ม",
			'id-id': "Tumbangkan"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693021,
				tcgplayer: 567171,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card