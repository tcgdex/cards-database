import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロボン",
		'zh-tw': "蚊香泳士",
		th: "เนียวโรบอน",
		id: "Poliwrath"
	},

	illustrator: "Kurata So",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [62],
	hp: 160,
	types: ["Water"],

	description: {
		ja: "泳ぎ だけでなく 格闘技も 得意。 鍛えあげた 腕から 豪快な パンチを 繰りだす。",
		'zh-tw': "除了游泳之外，也擅長使用格鬥技。完美鍛鍊的手臂 可以使出豪邁的拳擊。",
		th: "เก่งทั้งด้านการว่ายน้ำและศิลปะการต่อสู้ ลำแขนที่ฝึกฝนมาเป็นอย่างดีนั้นปล่อยหมัดอันทรงพลังออกมาได้",
		id: "Poliwrath tidak hanya ahli berenang, tapi juga ahli bela diri. Pokémon ini meluncurkan pukulan dahsyat menggunakan lengannya yang terlatih."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "バブルこうせん",
			'zh-tw': "泡沫光線",
			th: "บับเบิ้ลบีม",
			id: "Sinar Gelembung"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ごうかいパンチ",
			'zh-tw': "豪邁拳",
			th: "หมัดแรงถึงใจ",
			id: "Pukulan Dahsyat"
		},

		damage: "100+",

		effect: {
			ja: "コインを1回投げオモテなら、150ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加150點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 150",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 150."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719504
	}
}

export default card