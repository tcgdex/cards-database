import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ビークイン",
		'zh-tw': "蜂女王",
		'th-th': "บีควิน",
		'id-id': "Vespiquen"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [416],
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "胴体は 子どもたちの 巣穴。 いろんな フェロモンを 出して 子どもたちを 自由に 操る。",
		'zh-tw': "身體是孩子們的巢穴。會釋放出各式各樣的費洛蒙， 自由自在地控制孩子們。",
		'th-th': "ลำตัวของมันคือรังของเหล่าลูก ๆ มันจะปล่อยฟีโรโมนหลากหลายชนิดออกมาเพื่อควบคุมบรรดาลูก ๆ ให้ทำตามที่มันต้องการ",
		'id-id': "Tubuh Vespiquen merupakan sarang bagi anak-anaknya. Pokémon ini dapat menghasilkan berbagai macam feromon untuk mengendalikan anak-anaknya sesukanya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "にどづき",
			'zh-tw': "二連撞",
			'th-th': "พุ่งชนสองครั้ง",
			'id-id': "Menusuk Dua Kali"
		},

		damage: "30×",

		effect: {
			'ja-jp': "コインを2回投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。",
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30",
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		}
	}, {
		cost: ["Grass"],

		name: {
			'ja-jp': "しゅうげきしれい",
			'zh-tw': "襲擊指令",
			'th-th': "สั่งโจมตีสายฟ้าแลบ",
			'id-id': "Perintah Menggempur"
		},

		damage: 120,

		effect: {
			'ja-jp': "自分のベンチの「ミツハニー」を1匹選び、そのポケモンと、ついているすべてのカードを、山札にもどして切る。山札にもどせないなら、このワザは失敗。",
			'zh-tw': "選擇1隻自己的備戰區的「三蜜蜂」，將那隻寶可夢與附加的卡全部放回牌庫並重洗。若無法放回牌庫，則這個招式失敗。",
			'th-th': "เลือก [มิทซึฮันนี] บนเบนช์ฝ่ายเรา 1 ตัว นำโปเกมอนนั้น และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดแล้วสับ ถ้าใส่กลับไปในสำรับการ์ดไม่ได้ ท่าต่อสู้นี้จะล้มเหลว",
			'id-id': "Pilih 1 Combee di Cadangan sendiri, lalu kocok kembali Pokémon tersebut dan semua kartu yang dikenakannya ke Deck. Jika tidak dapat mengembalikannya ke Deck, serangan ini gagal."
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
				cardmarket: 705237,
				tcgplayer: 567761,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card