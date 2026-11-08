import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ペリッパー",
		'zh-tw': "大嘴鷗",
		'th-th': "เพลิปเปอร์",
		'id-id': "Pelipper"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	dexId: [279],
	hp: 120,
	types: ["Colorless"],

	description: {
		'ja-jp': "くちばしに 小さな ポケモンを 入れて 飛ぶ 空の 配達屋。 海に 浮かんで 羽を 休める。",
		'zh-tw': "把小型寶可夢裝在鳥嘴裡飛翔的空中送貨員。 會漂浮在海上讓翅膀休息。",
		'th-th': "นักขนส่งทางอากาศ โดยจะใส่โปเกมอนขนาดเล็กไว้ในจะงอย ลอยตัวในทะเลเพื่อพักปีก",
		'id-id': "Pelipper adalah kurir udara yang mengangkut Pokémon kecil di dalam paruhnya. Pokémon ini mengapung di laut untuk mengistirahatkan sayapnya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "かぜのたより",
			'zh-tw': "傳言",
			'th-th': "เสียงลือจากสายลม",
			'id-id': "Kabar Angin"
		},

		effect: {
			'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札またはトラッシュのどちらかを選ぶ。その中からサポートを1枚選び、相手に見せて、手札に加える。山札を見たなら、山札を切る。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。選擇自己的牌庫或者棄牌區任一方。從其中選擇1張支援者卡，在給對手看過後加入手牌。若看過牌庫，則重洗牌庫。",
			'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกสำรับการ์ดหรือตำแหน่งทิ้งการ์ดฝ่ายเราตำแหน่งใดตำแหน่งหนึ่ง เลือกการ์ดซัพพอร์ต 1 ใบจากในนั้น ให้ฝ่ายตรงข้ามดู นำขึ้นมือ ถ้าดูสำรับการ์ด ให้สับสำรับการ์ด",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih salah satu antara Deck atau Trash sendiri. Pilih 1 lembar Supporter yang ada di dalamnya, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Jika melihat Deck, kocok Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "つばさでうつ",
			'zh-tw': "翅膀攻擊",
			'th-th': "โจมตีด้วยปีก",
			'id-id': "Pukulan Sayap"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746529,
				tcgplayer: 567548,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577379,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card