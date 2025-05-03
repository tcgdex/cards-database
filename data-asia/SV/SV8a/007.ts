import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "バチンキー",
		id: "Thwackey",
		th: "บาจินคี",
		'zh-tw': "啪咚猴",
		'zh-cn': "啪咚猴"
	},

	illustrator: "Uninori",
	rarity: "None",
	category: "Pokemon",
	dexId: [811],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "２本の スティックで 激しい ビートを 刻める バチンキーほど 仲間たちの 尊敬を 集める。",
		id: "Thwackey yang dapat mengetukkan irama menggunakan dua buah stiknya dengan kencanglah yang makin dihormati kawanannya.",
		th: "ยิ่งบาจินคีตีจังหวะรุนแรงด้วยแท่งไม้ 2 แท่งเท่าไหร่ ก็ยิ่งได้รับความเคารพจากเหล่าสหาย",
		'zh-tw': "越是能用２根木棒敲奏出 激烈節拍的啪咚猴，越是 能獲得夥伴們的尊敬。",
		'zh-cn': "越是能用２根木棒敲奏出 激烈節拍的啪咚猴，越是 能獲得夥伴們的尊敬。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ドンドンだいこ",
			id: "Gendang Dung Dung Dung",
			th: "ตีกลองตึ้งตึ้ง",
			'zh-tw': "衝衝鼓",
			'zh-cn': "衝衝鼓"
		},

		effect: {
			ja: "自分のバトルポケモンが特性「おまつりおんど」を持つポケモンなら、自分の番に1回使える。自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon Bertarung sendiri adalah Pokémon yang memiliki Ability Orkes Festival. Pilih 1 kartu sesukanya dari Deck sendiri, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเราเป็นโปเกมอนที่มีความสามารถ [รำวงงานเทศกาล] ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดที่ชอบ 1 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด",
			'zh-tw': "若自己的戰鬥寶可夢為擁有特性「祭典樂舞」的寶可夢，則在自己的回合時可使用1次。從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。",
			'zh-cn': "若自己的戰鬥寶可夢為擁有特性「祭典樂舞」的寶可夢，則在自己的回合時可使用1次。從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "たたく",
			id: "Menghantam",
			th: "ตี",
			'zh-tw': "敲擊",
			'zh-cn': "敲擊"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card