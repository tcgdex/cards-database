import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミュウex",
		'zh-tw': "夢幻ex",
		th: "มิวex",
		id: "Mew ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "リスタート",
			'zh-tw': "重啟",
			th: "รีสตาร์ต",
			id: "Restart"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札が3枚になるように、山札を引く。",
			'zh-tw': "在自己的回合時可使用1次。從牌庫抽卡直到自己的手牌滿3張為止。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 3 ใบ",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 3 lembar."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ゲノムハック",
			'zh-tw': "基因駭入",
			th: "จีโนมแฮก",
			id: "Genome Hack"
		},

		effect: {
			ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢持有的招式，作為這個招式使用。",
			th: "เลือกท่าต่อสู้ที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมี 1 ท่า ใช้เป็นท่าต่อสู้นี้ได้",
			id: "Pilih 1 serangan yang dimiliki Pokémon Bertarung lawan, lalu gunakan sebagai serangan ini."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card