import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "グレッグル",
		'zh-tw': "不良蛙",
		th: "กูเรกกรู",
		id: "Croagunk"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [453],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "毒袋を ふくらませて 鳴らし 辺りに 不気味な 音を 響かせ 相手が ひるむと どくづきをする。",
		'zh-tw': "會鼓起毒囊鳴叫。讓四周響起詭異的聲音， 等對手畏縮，便施以毒擊。",
		th: "จะทำให้ถุงพิษพองตัวแล้วส่งเสียงก้องที่น่าสะพรึงกลัวไปรอบ ๆ บริเวณ พอฝ่ายตรงข้ามรู้สึกหวาดกลัวก็จะโจมตีด้วยพิษ",
		id: "Croagunk menggelembungkan dan membunyikan kantong racunnya untuk mengeluarkan suara mengerikan ke sekelilingnya dan ketika lawan ketakutan, Pokémon ini menyerang dengan tusukan beracun."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊",
			th: "ตี",
			id: "Menghantam"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "はりたおす",
			'zh-tw': "擊倒",
			th: "ผลักล้ม",
			id: "Tumbangkan"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card