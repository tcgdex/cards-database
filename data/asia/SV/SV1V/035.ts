import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パモット",
		'zh-tw': "布土撥",
		'th-th': "พาม็อต",
		'id-id': "Pawmo"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [922],
	hp: 90,
	types: ["Lightning"],

	description: {
		'ja-jp': "手のひらで 打撃を 加えつつ 肉球で 電撃を 浴びせる 独特の 格闘技を 使う。",
		'zh-tw': "使用的格鬥技非常獨特，會一邊用手掌給予打擊， 並一邊用肉球施放電擊。",
		'th-th': "ใช้ศิลปะการต่อสู้ที่มีเอกลักษณ์โดยการใช้ฝ่ามือจู่โจมไปพลางปล่อยไฟฟ้าจากอุ้งมืออาบคู่ต่อสู้",
		'id-id': "Pawmo bertarung menggunakan seni bela diri yang khas. Sambil menambahkan pukulan dengan telapak tangannya, Pokémon ini memberikan serangan listrik dari bantalan tangannya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "でんきショック",
			'zh-tw': "電擊",
			'th-th': "ช็อคไฟฟ้า",
			'id-id': "Sengatan Listrik"
		},

		damage: 30,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'ja-jp': "ヘッドボルト",
			'zh-tw': "伏特頭擊",
			'th-th': "เฮดโบลท์",
			'id-id': "Head Bolt"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693110,
				tcgplayer: 568261,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card