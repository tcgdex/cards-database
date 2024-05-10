import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パモット",
		'zh-tw': "布土撥",
		th: "พาม็อต",
		id: "Pawmo"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	dexId: [922],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "手のひらで 打撃を 加えつつ 肉球で 電撃を 浴びせる 独特の 格闘技を 使う。",
		'zh-tw': "使用的格鬥技非常獨特，會一邊用手掌給予打擊， 並一邊用肉球施放電擊。",
		th: "ใช้ศิลปะการต่อสู้ที่มีเอกลักษณ์โดยการใช้ฝ่ามือจู่โจมไปพลางปล่อยไฟฟ้าจากอุ้งมืออาบคู่ต่อสู้",
		id: "Pawmo bertarung menggunakan seni bela diri yang unik. Sambil menambahkan pukulan dengan telapak tangannya, Pokémon ini memberikan serangan listrik dari bantalan tangannya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "でんきショック",
			'zh-tw': "電擊",
			th: "ช็อกไฟฟ้า",
			id: "Sengatan Listrik"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "ヘッドボルト",
			'zh-tw': "伏特頭擊",
			th: "เฮดโบลต์",
			id: "Head Bolt"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card