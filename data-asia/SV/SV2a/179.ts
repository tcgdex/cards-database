import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "バリヤード",
		'zh-tw': "魔牆人偶",
		th: "บาร์เรียด",
		id: "Mr. Mime"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	dexId: [122],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "パントマイムが 得意。 指から 出した 波動で 壁を つくり あまたの 攻撃から 身を守る。",
		'zh-tw': "擅長表演默劇。用手指放出的波動製造牆壁，保護自己免於大多數的攻擊。",
		th: "ถนัดเล่นละครใบ้ สร้างกำแพงด้วยคลื่นที่ออกจากนิ้วเพื่อป้องกันตัวจากการโจมตีหลากหลายแบบ",
		id: "Pintar memainkan pantomim. Mr. Mime membuat dinding menggunakan gelombang yang dikeluarkan dari jarinya untuk melindungi dirinya dari serangan lawan."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ものまねバリア",
			'zh-tw': "模仿屏障",
			th: "บาเรียลอกเลียน",
			id: "Barier Peniru"
		},

		effect: {
			ja: "このポケモンと相手のバトルポケモンについているエネルギーの数が同じなら、このポケモンは、相手のポケモンからワザのダメージを受けない。",
			'zh-tw': "若這隻寶可夢與對手的戰鬥寶可夢身上附加的能量數量相同，則這隻寶可夢不會受到對手的寶可夢招式的傷害。",
			th: "ถ้าจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเท่ากัน โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม",
			id: "Jika Energi yang dikenakan Pokémon ini dan Pokémon Bertarung lawan sama jumlahnya, Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon lawan."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "サイコパワー",
			'zh-tw': "精神力量",
			th: "ไซโคพาวเวอร์",
			id: "Psychopower"
		},

		effect: {
			ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。",
			'zh-tw': "將3個傷害指示物以任意方式放置於對手的寶可夢身上。",
			th: "วางตัวนับแดเมจ 3 ตัว บนโปเกมอนฝ่ายตรงข้ามตามชอบ",
			id: "Letakkan sejumlah 3 Token Kerusakan pada Pokémon lawan sesukanya."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719575
	}
}

export default card