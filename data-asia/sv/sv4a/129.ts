import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハッサム",
		'zh-tw': "巨鉗螳螂",
		th: "ฮัซซัม",
		id: "Scizor",
		'zh-cn': "巨鉗螳螂"
	},

	illustrator: "otumami",
	category: "Pokemon",
	dexId: [212],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "鋼鉄を 含んでいる ハサミで 捕らえたものは どんなに 硬くても コナゴナに 砕く。",
		'zh-tw': "不管抓到多麼堅硬的東西，都能用含有鋼鐵成分的鉗子 夾得粉碎。",
		th: "ไม่ว่าสิ่งที่จับอยู่จะแข็งเพียงไหนก็สามารถหนีบหั่นให้เป็นชิ้น ๆ ได้ด้วยก้ามที่มีเหล็กเป็นส่วนประกอบ",
		id: "Dengan capitnya yang mengandung baja, Scizor akan menghancurkan benda sekeras apa pun yang ditangkapnya menjadi berkeping-keping.",
		'zh-cn': "不管抓到多麼堅硬的東西，都能用含有鋼鐵成分的鉗子 夾得粉碎。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "パニッシュシザー",
			'zh-tw': "懲罰之剪",
			th: "พันนิชซิสเซอร์",
			id: "Punish Scissor",
			'zh-cn': "懲罰之剪"
		},

		damage: "10+",

		effect: {
			ja: "相手の場の特性を持つポケモンの数×50ダメージ追加。",
			'zh-tw': "增加對手的場上擁有特性的寶可夢的數量×50點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนโปเกมอนที่มีความสามารถบนกระดานฝ่ายตรงข้าม x50",
			id: "Kerusakan yang diberikan bertambah sejumlah 50 untuk tiap Pokémon yang memiliki Ability di Arena lawan.",
			'zh-cn': "增加對手的場上擁有特性的寶可夢的數量×50點傷害。"
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			ja: "いあいぎり",
			'zh-tw': "居合斬",
			th: "ตัด",
			id: "Potongan Iai",
			'zh-cn': "居合斬"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card