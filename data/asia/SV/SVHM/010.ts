import { Card } from "models/database/card"
import Set from "../SVHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵脖頸",
		'th-th': "คอเหล็ก",
		'id-id': "Iron Jugulis"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "古書裡所記載的叫做鐵脖頸的物體， 說不定就是這隻寶可夢。",
		'th-th': "วัตถุที่เรียกว่าคอเหล็กที่ระบุในบันทึกเก่าแก่อาจเป็นโปเกมอนตัวนี้",
		'id-id': "Kemungkinan Pokémon ini adalah objek bernama Iron Jugulis yang tertera dalam buku kuno."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "自動用武",
			'th-th': "ป้องกันตัวอัตโนมัติ",
			'id-id': "Automartial"
		},

		effect: {
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。",
			'th-th': "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจ 3 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			'id-id': "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 3 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "爆破之風",
			'th-th': "บลาสต์วินด์",
			'id-id': "Blast Wind"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card