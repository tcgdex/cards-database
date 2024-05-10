import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンメル",
		'zh-tw': "呆火駝",
		th: "ดอนเมล",
		id: "Numel"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [322],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "１２００度の マグマが 体内で 燃えている。 寒くなると マグマが 固まるので 動きが 鈍くなる。",
		'zh-tw': "體內燃燒著１２００度的熔岩。一旦氣溫變低，熔岩就會凝固， 動作也會因此變得遲緩。",
		th: "มีแม็กมา 1200 องศาเซลเซียสไหลอยู่ในร่างกาย พออากาศเย็นลงแม็กมาจะแข็งตัว ทำให้เคลื่อนไหวได้ช้าลง",
		id: "Magma bersuhu 1200 ℃ membara di dalam tubuh Numel. Pergerakan Pokémon ini menjadi lamban karena magma tersebut mengeras ketika suhu udara menjadi dingin."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "あついマグマ",
			'zh-tw': "熾熱熔岩",
			th: "แม็กมาร้อน",
			id: "Magma Panas"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card