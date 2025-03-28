import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "カルボウ",
		id: "Charcadet",
		th: "คาร์โบ",
		'zh-tw': "炭小侍",
		'zh-cn': "炭小侍"
	},

	illustrator: "Saya Tsuruta",
	rarity: "None",
	category: "Pokemon",
	dexId: [935],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
		id: "Jiwa bersemayam ke dalam arang terbakar, lalu berubah menjadi Pokémon. Dengan semangat bertarung yang membara, Charcadet menantang untuk bertarung meskipun melawan musuh yang kuat.",
		th: "เป็นโปเกมอนที่เกิดจากถ่านไม้ที่ลุกไหม้ มีจิตวิญญาณการต่อสู้ที่เร่าร้อน กล้าเผชิญหน้าแม้กับศัตรูที่แข็งแกร่ง",
		'zh-tw': "生命寄宿在燃燒的木炭上 變成了寶可夢。即使敵人再強， 也會以燃燒的鬥志迎面而戰。",
		'zh-cn': "生命寄宿在燃燒的木炭上 變成了寶可夢。即使敵人再強， 也會以燃燒的鬥志迎面而戰。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なぐる",
			id: "Memukul",
			th: "ทุบตี",
			'zh-tw': "打擊",
			'zh-cn': "打擊"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "かえん",
			id: "Lidah Api",
			th: "เผาไหม้",
			'zh-tw': "烈焰",
			'zh-cn': "烈焰"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card