import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ホーホー",
		id: "Hoothoot",
		th: "โฮโฮ",
		'zh-tw': "咕咕",
		'zh-cn': "咕咕"
	},

	illustrator: "Nakamura Ippan",
	rarity: "None",
	category: "Pokemon",
	dexId: [163],
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "正確に 時を 告げることから 世界の ことわりを わきまえた 知恵の神様 とする 国もある。",
		id: "Dikarenakan ia dapat memberitahukan waktu dengan tepat, terdapat negara yang memuja Pokémon ini sebagai Dewa Kebijaksanaan yang maha tahu tentang kebenaran dunia.",
		th: "เพราะบอกเวลาได้อย่างเที่ยงตรง จึงมีดินแดนที่เชื่อว่ามันเป็นเทพแห่ง ปัญญาผู้รู้ซึ้งถึงสัจจะของโลก",
		'zh-tw': "由於能準確地報時， 因此在某些國家被視為是 明白世間一切事理的智慧之神。",
		'zh-cn': "由於能準確地報時， 因此在某些國家被視為是 明白世間一切事理的智慧之神。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ふみん",
			id: "Insomnia",
			th: "นอนไม่หลับ",
			'zh-tw': "不眠",
			'zh-cn': "不眠"
		},

		effect: {
			ja: "このポケモンはねむりにならない。",
			id: "Pokémon ini tidak akan menjadi Tidur.",
			th: "โปเกมอนนี้จะไม่เป็นสภาวะ[หลับ]",
			'zh-tw': "這隻寶可夢不會【睡眠】。",
			'zh-cn': "這隻寶可夢不會【睡眠】。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たいあたり",
			id: "Serudukan",
			th: "พุ่งเข้าชน",
			'zh-tw': "撞擊",
			'zh-cn': "撞擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card