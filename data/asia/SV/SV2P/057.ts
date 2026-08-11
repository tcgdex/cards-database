import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ノココッチ",
		'zh-tw': "土龍節節",
		'th-th': "โนโกก็อจจิ",
		'id-id': "Dudunsparce"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [982],
	hp: 140,
	types: ["Colorless"],

	description: {
		'ja-jp': "硬い 尻尾で 地中 深くの 岩盤を くり抜き 巣を 作る。 巣穴は 長さ１０キロに およぶ。",
		'zh-tw': "會用堅硬的尾巴挖穿地下深處的岩盤來築巢。 巢穴可以長達１０公里。",
		'th-th': "ขุดพื้นหินที่อยู่ลึกลงไปในดินด้วยหางสุดแข็งแล้วทำรัง โพรงมีความยาวกว่า 10 กิโลเมตร",
		'id-id': "Dudunsparce membuat sarangnya dengan melubangi batuan dasar ke dalam menggunakan ekor kerasnya. Panjang sarangnya mencapai 10 kilometer."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "どろかけ",
			'zh-tw': "擲泥",
			'th-th': "สาดโคลน",
			'id-id': "Semprotan Lumpur"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ほりにげフラッシュ",
			'zh-tw': "挖逃閃光",
			'th-th': "ขุดหนีสายฟ้าแลบ",
			'id-id': "Kilat Gali Kabur"
		},

		damage: 100,

		effect: {
			'ja-jp': "相手のバトルポケモンをマヒにする。このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			'zh-tw': "將對手的戰鬥寶可夢【麻痺】。將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา] นำโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดฝ่ายเราแล้วสับ",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh. Kocok kembali Pokémon ini dan semua kartu yang dikenakannya ke Deck sendiri."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705290,
				tcgplayer: 567814,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card