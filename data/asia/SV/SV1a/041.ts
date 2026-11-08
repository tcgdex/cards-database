import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カヌチャン",
		'zh-tw': "小鍛匠",
		'th-th': "คานุจัง",
		'id-id': "Tinkatink"
	},

	illustrator: "Pani Kobayashi",
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
			'ja-jp': "ぶんまわす",
			'zh-tw': "狂舞揮打",
			'th-th': "เหวี่ยงกระเด็น",
			'id-id': "Ayunan Brutal"
		},

		damage: "10+",

		effect: {
			'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
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
				cardmarket: 701095,
				tcgplayer: 568164,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card