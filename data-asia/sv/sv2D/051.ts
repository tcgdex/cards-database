import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "マニューラ",
		'zh-tw': "瑪狃拉",
		th: "มานิวลา",
		id: "Weavile"
	},

	illustrator: "saino misaki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [461],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "進化して さらに ずる賢くなり ツメで 石に サインをつけて コミュニケーションを はかっている。",
		'zh-tw': "進化後變得更加狡詐，會用爪子在石頭上 留下記號和夥伴交流。",
		th: "พอวิวัฒนาการจะยิ่งเจ้าเล่ห์มากขึ้น ใช้เล็บทำสัญลักษณ์ที่หินเพื่อสื่อสาร",
		id: "Kelicikannya makin bertambah setelah Sneasel berevolusi menjadi Weavile. Pokémon ini menggoreskan tanda ke batu menggunakan cakarnya untuk berkomunikasi."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アサルトハント",
			'zh-tw': "進擊狩獵",
			th: "แอสซอลต์ฮันท์",
			id: "Assault Hunt"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。相手のベンチのたねポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "在自己的回合，從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。選擇1隻對手的備戰區的【基礎】寶可夢，與戰鬥寶可夢互換。",
			th: "ในเทิร์นฝ่ายเรา เมื่อโปเกมอนนี้ออกจากเบนช์มาที่ตำแหน่งต่อสู้ ใช้ได้ 1 ครั้ง เลือกโปเกมอน[พื้นฐาน]บนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat Pokémon ini masuk dari Cadangan ke Arena Bertarung. Pilih 1 Pokémon Basic di Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "スラッシュクロー",
			'zh-tw': "利爪揮砍",
			th: "สแลชคลอว์",
			id: "Cakar Penebas"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card