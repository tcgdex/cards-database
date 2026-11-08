import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "アマージョ",
		'zh-tw': "甜冷美后",
		'th-th': "อมาโจ",
		'id-id': "Tsareena"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [763],
	hp: 160,
	types: ["Grass"],

	description: {
		'ja-jp': "気位が 高く 攻撃的だが ヘタの 冠に 触られると たちまち 大人しくなるという。",
		'zh-tw': "雖然性情高傲且攻擊性強，但據說只要摸摸牠果蒂的冠， 牠立刻會變得很溫順。",
		'th-th': "หยิ่งและก้าวร้าว แต่ถ้ามีคนมาจับขั้วมงกุฎ ก็จะสงบเสงี่ยมขึ้นทันที",
		'id-id': "Dikabarkan meskipun Tsareena agresif dan memiliki harga diri yang tinggi, ia akan segera menjadi tenang jika mahkota di sepalnya disentuh."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "じょおうのかかと",
			'zh-tw': "女王的腳跟",
			'th-th': "ส้นเท้าของราชินี",
			'id-id': "Tumit Ratu"
		},

		damage: 60,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンは、手札から出すポケモンに進化できない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法進化成從手牌使出的寶可夢。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะวิวัฒนาการเป็นโปเกมอนที่จะนำออกมาจากบนมือไม่ได้",
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat melakukan evolusi menjadi Pokémon yang dimasukkan dari Kartu Pegangan."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'ja-jp': "スピニングキック",
			'zh-tw': "旋轉踢",
			'th-th': "สปินนิงคิก",
			'id-id': "Spinning Kick"
		},

		damage: 160,

		effect: {
			'ja-jp': "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705242,
				tcgplayer: 567766,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card