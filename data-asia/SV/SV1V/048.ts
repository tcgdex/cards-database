import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ハカドッグ",
		'zh-tw': "墓揚犬",
		th: "ฮากาด็อก",
		id: "Houndstone"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [972],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "大切に 弔われた ポケモンが 生まれ変わった 姿。 頭の 突起を 触られるのは 嫌い。",
		'zh-tw': "受到深摯悼念的寶可夢轉生而成的樣子。 不喜歡被摸到頭上的突起物。",
		th: "ร่างที่เกิดใหม่ของโปเกมอนที่มีผู้อาลัยอาวรณ์ต่อการจากไป ไม่ชอบให้ใครมาจับโหนกบนหัว",
		id: "Wujud reinkarnasi Pokémon yang dimakamkan dengan kasih sayang. Houndstone tidak suka jika tonjolan kepalanya disentuh."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "おはかまいり",
			'zh-tw': "掃墓",
			th: "เยี่ยมหลุมศพ",
			id: "Berkabung"
		},

		damage: "80+",

		effect: {
			ja: "自分のトラッシュにあるポケモンの枚数×10ダメージ追加。",
			'zh-tw': "增加自己的棄牌區的【超】寶可夢卡的張數×10點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนการ์ดโปเกมอน[พลังจิต]ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา x10",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap lembar Pokémon {Psychic} yang ada di Trash sendiri."
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

	retreat: 3,
	regulationMark: "G"
}

export default card