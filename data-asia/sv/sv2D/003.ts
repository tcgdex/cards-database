import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ワタッコ",
		'zh-tw': "毽子棉",
		th: "วาทักโกะ",
		id: "Jumpluff"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [189],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "季節風に 乗り 旅をする。 綿胞子が 尽きるとき 旅と ワタッコの 一生は 終わる。",
		'zh-tw': "會乘著季風到處旅行。當毽子棉的棉花孢子掉光時， 牠的旅行和生命也會隨之結束。",
		th: "ออกเดินทางโดยล่องลอยไปตามลมมรสุม การเดินทางและชีวิตของวาทักโกะจะจบลงเมื่อเมล็ดฝ้ายหมดไป",
		id: "Pokémon ini melakukan perjalanan dengan menaiki angin musim. Perjalanan dan kehidupan Jumpluff berakhir saat spora kapasnya habis diterbangkan."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ふわっとよける",
			'zh-tw': "輕飄躲避",
			th: "หลบสวย ๆ",
			id: "Mengelit Enteng"
		},

		effect: {
			ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			'zh-tw': "這隻寶可夢受到招式的傷害時，自己擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。",
			th: "เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว โปเกมอนนี้จะไม่ได้รับแดเมจนั้น",
			id: "Saat Pokémon ini menerima kerusakan akibat serangan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon ini tidak menerima kerusakan tersebut."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "わたげのかぜ",
			'zh-tw': "棉絮之風",
			th: "สายลมแห่งปุยฝ้าย",
			id: "Angin Bulu Kapas"
		},

		damage: 60,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card