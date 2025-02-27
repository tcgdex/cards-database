import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "レジギガス",
		id: "Regigigas",
		th: "เรจิกิกัส",
		'zh-tw': "雷吉奇卡斯",
		'zh-cn': "雷吉奇卡斯"
	},

	illustrator: "chibi",
	rarity: "None",
	category: "Pokemon",
	dexId: [486],
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "特殊な 氷山や 岩石 マグマから 自分の 姿に 似た ポケモンを つくったと 言われる。",
		id: "Dikatakan bahwa Regigigas dapat membuat Pokémon yang wujudnya mirip dengan dirinya dari gunung es dan bebatuan magma khusus.",
		th: "ว่ากันว่าจะสร้างโปเกมอนที่มีรูปร่างคล้ายตนจากแม็กมา หินผา และ ภูเขาน้ำแข็งพิเศษ",
		'zh-tw': "據說牠以特殊的冰山、 岩石和熔岩做出了 神似自己的寶可夢。",
		'zh-cn': "據說牠以特殊的冰山、 岩石和熔岩做出了 神似自己的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ジュエルブレイク",
			id: "Jewel Break",
			th: "จิวเวลเบรก",
			'zh-tw': "寶石破壞",
			'zh-cn': "寶石破壞"
		},

		damage: "100+",

		effect: {
			ja: "相手のバトルポケモンが「テラスタル」のポケモンなら、230ダメージ追加。",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon Terastal, kerusakan yang diberikan bertambah sejumlah 230.",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอน [เทรัสตัล] การโจมตี นี้จะเพิ่มแดเมจอีก 230",
			'zh-tw': "若對手的戰鬥寶可夢為「太晶」寶可夢，則增加230點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢為「太晶」寶可夢，則增加230點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card