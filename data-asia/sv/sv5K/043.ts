import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "アーボ",
		'zh-tw': "阿柏蛇",
		th: "อาร์โบ"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [23],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "育つほどに どんどん 長くなる。 そして 夜中は 木の枝に グルグルと 絡まって 休む。",
		'zh-tw': "身體在成長過程中會越變越長。在夜裡，牠會把身體 一圈圈纏繞在樹枝上睡覺。",
		th: "ยิ่งเติบโต ตัวยิ่งยาวขึ้นเรื่อย ๆ ในตอนกลางคืนจะพักผ่อนโดยเลื้อยตัวพันเกี่ยวกิ่งไม้เอาไว้"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "まぜこみどく",
			'zh-tw': "混入毒",
			th: "พิษผสมกัน"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくとこんらんにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【中毒】與【混亂】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[สับสน]"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住",
			th: "กัดติด"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card