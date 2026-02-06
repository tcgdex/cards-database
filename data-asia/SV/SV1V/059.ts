import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ラッキー",
		'zh-tw': "吉利蛋",
		th: "ลัคกี",
		id: "Chansey"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [113],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "持っている タマゴを 割らないように 気をつけて 歩く。 でも 逃げ足は とても 速い。",
		'zh-tw': "為了避免蛋被打破，走起路來小心謹慎。 然而逃跑速度卻是快之無比。",
		th: "เดินอย่างระวังเพื่อไม่ให้ไข่ที่มีอยู่แตก แต่ตอนหนีจะหนีไวมาก",
		id: "Chansey selalu berjalan dengan hati-hati agar telur yang dibawanya tidak pecah. Tapi, Pokémon ini melarikan diri dengan cepat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はたく",
			'zh-tw': "拍擊",
			th: "ปัด",
			id: "Tumbuk"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "タマゴころがし",
			'zh-tw': "滾動之蛋",
			th: "กลิ้งไข่",
			id: "Menggelindingkan Telur"
		},

		damage: "60×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×60ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×60點傷害。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x60",
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 60 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693134
	}
}

export default card