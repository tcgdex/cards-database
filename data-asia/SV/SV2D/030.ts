import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "シロデスナ",
		'zh-tw': "噬沙堡爺",
		th: "ชิโรเดซึนะ",
		id: "Palossand"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [770],
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "小さな ポケモンを 砂の体に 引きずり込み 好きなときに 生気を 吸い取る 恐ろしい ポケモン。",
		'zh-tw': "會把小型寶可夢吸進沙子構成的身體裡，任憑自己 吸取精氣的恐怖寶可夢。",
		th: "ลากโปเกมอนตัวเล็ก ๆ เข้าไปเก็บไว้ในตัวที่เป็นทราย แล้วสูบเอาพลังชีวิตยามที่ต้องการ เป็นโปเกมอนที่น่ากลัว",
		id: "Palossand adalah Pokémon mengerikan yang menyeret Pokémon kecil ke dalam tubuh pasirnya dan akan mengisap vitalitas mereka saat ia mau."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ホロウショット",
			'zh-tw': "陰森射擊",
			th: "ฮอลโลว์ช็อต",
			id: "Hollow Shot"
		},

		damage: 40
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "グラウンドパワー",
			'zh-tw': "大地能量",
			th: "กราวด์พาวเวอร์",
			id: "Ground Power"
		},

		damage: "80+",

		effect: {
			ja: "場に自分のスタジアムが出ているなら、80ダメージ追加。",
			'zh-tw': "若場上有自己的競技場卡，則增加80點傷害。",
			th: "ถ้ามีการ์ดสเตเดียมฝ่ายเราอยู่บนกระดาน การโจมตีนี้จะเพิ่มแดเมจอีก 80",
			id: "Jika ada Stadium sendiri di Arena, kerusakan yang diberikan bertambah sejumlah 80."
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

	retreat: 4,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 705334
	}
}

export default card