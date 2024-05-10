import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "キョジオーン",
		'zh-tw': "鹽石巨靈",
		th: "เคียวจีโอน",
		id: "Garganacl"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [934],
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "指先を 擦りあわせて 塩を ケガした ポケモンに 振りかけると ひどい 傷も たちまち 治る。",
		'zh-tw': "只要合起指尖，搓出鹽來灑在受傷的寶可夢身上， 就算再重的傷都會瞬間痊癒。",
		th: "ถูปลายนิ้วและโปรยเกลือใส่โปเกมอนที่บาดเจ็บ แม้จะเป็นบาดแผลที่สาหัสก็จะหายในทันที",
		id: "Garganacl menaburkan garam kepada Pokémon yang terluka dengan menggosok-gosokkan ujung jarinya. Luka parah pun akan segera sembuh."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "めぐみのしお",
			'zh-tw': "恩澤之鹽",
			th: "เกลือประสาทพร",
			id: "Garam Berkah"
		},

		effect: {
			ja: "このポケモンがいるかぎり、ポケモンチェックのたび、自分のポケモン全員のHPを、それぞれ「20」回復する。",
			'zh-tw': "只要這隻寶可夢在場上，每次寶可夢檢查時，將自己的所有寶可夢各恢復「20」HP。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ ทุกครั้งที่ตรวจสอบโปเกมอน จะฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [20]",
			id: "Selama Pokémon ini ada di Arena, tiap kali Pokémon Check, pulihkan HP semua Pokémon sendiri masing-masing sejumlah 20."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ノックハンマー",
			'zh-tw': "敲擊之錘",
			th: "น็อกแฮมเมอร์",
			id: "Knock Hammer"
		},

		damage: 130,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			id: "Buang 1 kartu dari atas Deck lawan ke Trash."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card