import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "サマヨール",
		id: "Dusclops",
		th: "ซามาโยรุ",
		'zh-tw': "彷徨夜靈",
		'zh-cn': "彷徨夜靈"
	},

	illustrator: "Aya Kusube",
	rarity: "None",
	category: "Pokemon",
	dexId: [356],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体の中で 燃えている 真っ赤な ひとつ目が サマヨールの 本体と いわれるが 誰も 見ていない。",
		id: "Dikatakan bahwa mata merah padam tunggal yang sedang terbakar di dalam tubuhnya merupakan tubuh aslinya, tetapi tidak ada yang pernah melihatnya.",
		th: "ว่ากันว่า นัยน์ตาเดียวสีแดงฉานที่ลุกไหม้อยู่ในตัวคือร่างที่แท้จริงของซามาโยรุ แต่ก็ไม่มีใครเคยเห็น",
		'zh-tw': "據說在體內燃燒著的鮮紅獨眼 是彷徨夜靈的本體， 但沒有人親眼見過。",
		'zh-cn': "據說在體內燃燒著的鮮紅獨眼 是彷徨夜靈的本體， 但沒有人親眼見過。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "カースドボム",
			id: "Cursed Bomb",
			th: "ระเบิดต้องสาป",
			'zh-tw': "咒詛炸彈",
			'zh-cn': "咒詛炸彈"
		},

		effect: {
			ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。相手のポケモン1匹に、ダメカンを5個のせる。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pokémon ini KO jika menggunakan Ability ini. Letakkan 5 Token Kerusakan pada 1 Pokémon lawan.",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เมื่อใช้แล้ว จะทำให้โปเกมอนนี้[หมดสภาพ] ‌วางตัวนับแดเมจ 5 ตัว บนโปเกมอนฝ่ายตรงข้าม 1 ตัว",
			'zh-tw': "在自己的回合時可使用1次，若使用，則將這隻寶可夢【昏厥】。在對手的1隻寶可夢身上放置5個傷害指示物。",
			'zh-cn': "在自己的回合時可使用1次，若使用，則將這隻寶可夢【昏厥】。在對手的1隻寶可夢身上放置5個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "おにび",
			id: "Api Hantu",
			th: "ลูกไฟวิญญาณ",
			'zh-tw': "鬼火",
			'zh-cn': "鬼火"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Darkness",
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