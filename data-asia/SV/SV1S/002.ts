import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ノクタス",
		'zh-tw': "夢歌仙人掌",
		th: "น็อคทัส",
		id: "Cacturne"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [332],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "砂漠の 旅人の 後ろを 集団で つきまとい 疲れて 動けなくなるのを 待つのだ。",
		'zh-tw': "會成群跟在沙漠中的旅人後方，等待對方 因疲累而變得無法動彈。",
		th: "จะเดินกันเป็นกลุ่มติดตามนักเดินทางในทะเลทรายอยู่ไม่ห่างเพื่อรอให้เหนื่อยจนขยับตัวไม่ไหว",
		id: "Cacturne membuntuti pengembara padang pasir secara berkelompok, menunggu hingga pengembara tersebut kelelahan dan tidak bisa bergerak."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はんげきばり",
			'zh-tw': "反擊針",
			th: "หนามโต้กลับ",
			id: "Jarum Serangan Balasan"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจ 3 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			id: "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 3 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "とげショット",
			'zh-tw': "尖刺射擊",
			th: "กระสุนหนาม",
			id: "Tembakan Duri"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 692968
	}
}

export default card