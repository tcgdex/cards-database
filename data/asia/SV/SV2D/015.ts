import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カルボウ",
		'zh-tw': "炭小侍",
		'th-th': "คาร์โบ",
		'id-id': "Charcadet"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [935],
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
		'zh-tw': "生命寄宿在燃燒的木炭上變成了寶可夢。即使敵人再強， 也會以燃燒的鬥志迎面而戰。",
		'th-th': "เป็นโปเกมอนที่เกิดจากถ่านไม้ที่ลุกไหม้ มีจิตวิญญาณการต่อสู้ที่เร่าร้อน กล้าเผชิญหน้าแม้กับศัตรูที่แข็งแกร่ง",
		'id-id': "Jiwa bersemayam ke dalam arang terbakar, lalu berubah menjadi Pokémon. Dengan semangat bertarung yang membara, Charcadet menantang pertarungan meskipun dengan lawan yang kuat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ひだね",
			'zh-tw': "火種",
			'th-th': "เชื้อไฟ",
			'id-id': "Nyala Api"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "マグナムパンチ",
			'zh-tw': "增量拳",
			'th-th': "แมกนัมพันช์",
			'id-id': "Magnum Punch"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705319,
				tcgplayer: 565877,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card