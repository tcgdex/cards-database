import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンドパン",
		'zh-tw': "穿山王",
		th: "แซนด์แพน",
		id: "Sandslash"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [28],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "鋭い ツメを ひっかけて 木を 登る。 下で 待つ サンドたちに 木の実を 落とし 分け与えるのだ。",
		'zh-tw': "會用銳利的爪子當作鉤子來爬樹。這是為了將樹果擊落， 分給在樹下等待的穿山鼠們。",
		th: "ใช้กรงเล็บแหลมคมจิกและปีนขึ้นต้นไม้ เพื่อโยนผลไม้ลงมาแบ่งให้กับเหล่าแซนด์ที่รออยู่ด้านล่าง",
		id: "Sandslash mendaki pohon dengan mengaitkan cakarnya yang tajam. Pokémon ini menjatuhkan beri dan membagikannya pada Sandshrew yang menanti di bawah pohon."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "じひびき",
			'zh-tw': "地鳴",
			th: "พสุธากัมปนาท",
			id: "Gelegar Tanah"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "トゲでえぐる",
			'zh-tw': "針裂",
			th: "คว้านด้วยหนาม",
			id: "Duri Pengoyak"
		},

		damage: "80+",

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっているなら、100ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加100點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			id: "Jika Pokémon Bertarung lawan memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 100."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card