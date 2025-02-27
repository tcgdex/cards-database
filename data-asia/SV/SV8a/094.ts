import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤブクロン",
		id: "Trubbish",
		th: "ยาบุคุรอน",
		'zh-tw': "破破袋",
		'zh-cn': "破破袋"
	},

	illustrator: "Miki Tanaka",
	rarity: "None",
	category: "Pokemon",
	dexId: [568],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "不衛生な 場所が 好き。 ゴミで 汚したまま 放っておくと 部屋にも 現れて 棲みつく。",
		id: "Trubbish menyukai tempat yang tidak higienis. Jika kamar tidak dibersihkan dan dibiarkan dalam keadaan kotor oleh sampah, ia pun akan muncul dan menetap di kamar tersebut.",
		th: "ชอบที่ไม่ถูกสุขอนามัย ถ้าทิ้งขยะให้สกปรกจะปรากฏตัวขึ้นและอาศัยอยู่ในห้อง",
		'zh-tw': "喜歡不衛生的地方。 如果不及時清理家裡的垃圾， 破破袋就會過來居住。",
		'zh-cn': "喜歡不衛生的地方。 如果不及時清理家裡的垃圾， 破破袋就會過來居住。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ガスでつつむ",
			id: "Gas yang Menyelimuti",
			th: "ห่อหุ้มด้วยแก๊ส",
			'zh-tw': "瓦斯包圍",
			'zh-cn': "瓦斯包圍"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムヒット",
			id: "Venom Hit",
			th: "เวนอมฮิต",
			'zh-tw': "毒液一擊",
			'zh-cn': "毒液一擊"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card