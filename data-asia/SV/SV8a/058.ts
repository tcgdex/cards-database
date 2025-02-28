import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ユンゲラー",
		id: "Kadabra",
		th: "ยุนเกเรอร์",
		'zh-tw': "勇基拉",
		'zh-cn': "勇基拉"
	},

	illustrator: "Uninori",
	rarity: "None",
	category: "Pokemon",
	dexId: [64],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーで 宙に 浮いたまま 眠る。 弾力に 優れた しっぽを 枕がわりに するぞ。",
		id: "Kadabra tidur dalam kondisi tetap mengambang di udara menggunakan kekuatan psikokinesis. Pokémon ini menggunakan ekornya yang membal sebagai bantal.",
		th: "ใช้พลังจิตเพื่อลอยตัวหลับอยู่ในอากาศ ใช้หางที่มีความยืดหยุ่นเป็นหมอน",
		'zh-tw': "會用精神力量浮在空中睡覺。 牠還會把彈力十足的尾巴 當成枕頭用喔。",
		'zh-cn': "會用精神力量浮在空中睡覺。 牠還會把彈力十足的尾巴 當成枕頭用喔。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "サイコキネシス",
			id: "Psikis",
			th: "ไซโคคิเนซิส",
			'zh-tw': "精神強念",
			'zh-cn': "精神強念"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan.",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			'zh-cn': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
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

	retreat: 1,
	regulationMark: "H"
}

export default card