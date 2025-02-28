import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンダース",
		id: "Jolteon",
		th: "ธันเดอร์ส",
		'zh-tw': "雷伊布",
		'zh-cn': "雷伊布"
	},

	illustrator: "Nisota Niso",
	rarity: "None",
	category: "Pokemon",
	dexId: [135],
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "細胞が 出している 弱い 電気を ひとまとめにして 強力な 電撃を 放つ。",
		id: "Jolteon mengumpulkan listrik berdaya kecil yang dikeluarkan oleh sel-sel tubuhnya, lalu menembakkan serangan listrik yang kuat.",
		th: "รวบรวมพลังไฟฟ้าอ่อน ๆ ที่เซลล์ปล่อยออกมา แล้วยิงกระแสไฟฟ้าอันทรงพลัง",
		'zh-tw': "會把細胞發出的 微弱電流都集中起來 釋放強力的電擊。",
		'zh-cn': "會把細胞發出的 微弱電流都集中起來 釋放強力的電擊。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ちょくげきだん",
			id: "Serangan Linear",
			th: "ยิงตรง",
			'zh-tw': "直擊彈",
			'zh-cn': "直擊彈"
		},

		effect: {
			ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			id: "Serangan ini memberikan kerusakan sejumlah 30 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "ทำแดเมจ 30 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "とうしのいかずち",
			id: "Guntur Semangat Petarung",
			th: "สายฟ้านักสู้",
			'zh-tw': "鬥志雷霆",
			'zh-cn': "鬥志雷霆"
		},

		damage: "90+",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 90.",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card