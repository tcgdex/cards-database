import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カルボウ",
		'zh-tw': "炭小侍",
		'th-th': "คาร์โบ",
		'id-id': "Charcadet"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [935],
	hp: 60,
	types: ["Fire"],

	description: {
		'ja-jp': "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
		'zh-tw': "生命寄宿在燃燒的木炭上變成了寶可夢。即使敵人再強， 也會以燃燒的鬥志迎面而戰。",
		'th-th': "เป็นโปเกมอนที่เกิดจากถ่านไม้ที่ลุกไหม้ มีจิตวิญญาณการต่อสู้ที่เร่าร้อน กล้าเผชิญหน้าแม้กับศัตรูที่แข็งแกร่ง",
		'id-id': "Jiwa bersemayam ke dalam arang terbakar, lalu berubah menjadi Pokémon. Dengan semangat bertarung yang membara, Charcadet menantang pertarungan meskipun dengan lawan yang kuat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "ひのこ",
			'zh-tw': "火花",
			'th-th': "ลูกไฟ",
			'id-id': "Bara Api"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692976,
				tcgplayer: 567127,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card