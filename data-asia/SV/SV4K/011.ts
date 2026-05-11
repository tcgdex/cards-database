import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンメル",
		'zh-tw': "呆火駝",
		th: "ดอนเมล",
		ko: "둔타"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [322],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "１２００度の マグマが 体内で 燃えている。 寒くなると マグマが 固まるので 動きが 鈍くなる。",
		'zh-tw': "體內燃燒著１２００度的熔岩。一旦氣溫變低，熔岩就會凝固， 動作也會因此變得遲緩。",
		th: "มีแม็กมา 1200 องศาเซลเซียสไหลอยู่ในร่างกาย พออากาศเย็นลงแม็กมาจะแข็งตัว ทำให้เคลื่อนไหวได้ช้าลง",
		ko: "1200도의 마그마가 체내에서 끓고 있다. 추워지면 마그마가 굳어서 움직임이 둔해진다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす",
			'zh-tw': "灼熱",
			th: "เผา",
			ko: "그을리기"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			ko: "상대의 배틀 포켓몬을 화상으로 만든다."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ヒートブラスト",
			'zh-tw': "高溫爆破",
			th: "ฮีทบลาสต์",
			ko: "히트블라스트"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741248
	}
}

export default card