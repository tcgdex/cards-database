import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "クレッフィ",
		'zh-tw': "鑰圈兒",
		th: "เคลฟฟี",
		id: "Klefki"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [707],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "昔の 貴族は 金庫の カギを 管理させる クレッフィを 代々 引き継ぎ 大切に 扱った。",
		'zh-tw': "過去的貴族會將掌管金庫鑰匙的鑰圈兒一代代地 傳承下去，並對其呵護備至。",
		th: "ขุนนางสมัยก่อนจากรุ่นสู่รุ่นจะดูแลเคลฟฟีที่คอยรักษากุญแจห้องเก็บสมบัติเป็นอย่างดี",
		id: "Keluarga bangsawan zaman dulu secara turun-temurun mewariskan dan menjaga dengan baik Klefki yang dipercaya untuk mengelola kunci brankas."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いたずらロック",
			'zh-tw': "惡作劇之鎖",
			th: "ล็อกซุกซน",
			id: "Kunci Jahil"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、おたがいの場のたねポケモンの特性（「いたずらロック」をのぞく）は、すべてなくなる。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，雙方場上的【基礎】寶可夢的特性（「●●●」除外）全部消除。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ความสามารถของโปเกมอน[พื้นฐาน]บนกระดานของทั้งสองฝ่าย (ยกเว้น [ล็อกซุกซน]) ทั้งหมดจะหายไป",
			id: "Selama Pokémon ini ada di Arena Bertarung, Pokémon Basic di Arena kedua pemain menjadi tidak memiliki Ability (selain Kunci Jahil)."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ねらいおとす",
			'zh-tw': "狙落",
			th: "เล็งเผด็จศึก",
			id: "Bidik dan Jatuhkan"
		},

		damage: 10,

		effect: {
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。",
			th: "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			id: "Sebelum memberikan kerusakan, buang Pokémon Tool yang dikenakan pada Pokémon Bertarung lawan ke Trash."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693120
	}
}

export default card