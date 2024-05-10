import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ベトベター",
		'zh-tw': "臭泥",
		th: "เบโตเบตา",
		id: "Grimer"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [88],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "ヘドロが ポケモンになった。 汚い 場所に 集まって 体の ばい菌を 増やしていく。",
		'zh-tw': "污泥變成的寶可夢。會聚集在骯髒的地方 來繁殖身體的細菌。",
		th: "โคลนสกปรกกลายเป็นโปเกมอน รวมตัวกันในที่สกปรกเพื่อเพิ่มจำนวนเชื้อโรคในร่างกาย",
		id: "Limbah yang berubah menjadi Pokémon. Grimer berkumpul di tempat-tempat kotor dan menambahkan bakteri ke tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "どくのいき",
			'zh-tw': "毒之氣息",
			th: "ลมหายใจพิษ",
			id: "Napas Beracun"
		},

		damage: 50,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card