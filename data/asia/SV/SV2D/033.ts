import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カヌチャン",
		'zh-tw': "小鍛匠",
		'th-th': "คานุจัง",
		'id-id': "Tinkatink"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [957],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "手作りの ハンマーを 振りまわして 身を 守るが 金属を 食べる ポケモンには よく 奪われる。",
		'zh-tw': "雖然會揮舞著手工打造的錘子來保護自己，但卻常被 以金屬為食的寶可夢搶走。",
		'th-th': "เหวี่ยงค้อนทำมือเพื่อป้องกันตัว แต่มักถูกโปเกมอนที่กินโลหะแย่งไป",
		'id-id': "Tinkatink mengayunkan palu buatannya untuk melindungi dirinya, namun palu tersebut sering direbut oleh Pokémon pemakan logam."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "くだく",
			'zh-tw': "碎",
			'th-th': "ทุบแตก",
			'id-id': "Melumatkan"
		},

		damage: 10,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705337,
				tcgplayer: 565895,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card