import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "オラチフ",
		'zh-tw': "偶叫獒",
		th: "โอราทิฟ",
		id: "Maschiff"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [942],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "発達した あごと キバは 岩を 噛み砕く 力強さ。 厚い 脂肪は 防御力 抜群。",
		'zh-tw': "發達的顎部和獠牙擁有能咬碎岩石的強大威力。 厚厚的脂肪使牠防禦力超群。",
		th: "ขากรรไกรและเขี้ยวที่พัฒนาจนแข็งแกร่งสามารถบดขยี้หินได้ ไขมันที่หนาทำให้มีพลังป้องกันที่ดีเยี่ยม",
		id: "Rahang dan taring Maschiff yang telah berkembang memiliki kekuatan untuk mengunyah habis batu. Lemak tebal Pokémon ini memiliki kekuatan pertahanan yang luar biasa."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "かみくだく",
			'zh-tw': "咬碎",
			th: "กัดขย้ำ",
			id: "Mengunyah"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card