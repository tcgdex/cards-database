import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "エクスレッグ",
		'zh-tw': "烈腿蝗",
		th: "เอ็กซ์เลก",
		id: "Lokix"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [920],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "本気になると 畳んでいた 脚で 立ち上がり 決戦モードになる。 短時間で 敵を 制圧する。",
		'zh-tw': "認真起來時會用折起的腳站起來，進入決戰模式。 會在短時間內鎮壓住敵人。",
		th: "เมื่อเอาจริงจะยืนขึ้นด้วยขาที่พับไว้และเข้าสู่โหมดปะทะ เอาชนะศัตรูอย่างราบคาบในเวลาอันสั้น",
		id: "Lokix berdiri dengan kakinya yang terlipat dan menjadi mode bertarung jika menjadi serius dalam pertarungan. Pokémon ini akan mengalahkan lawannya dalam waktu singkat."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "アサルトキック",
			'zh-tw': "進擊踢",
			th: "แอสซอลต์คิก",
			id: "Assault Kick"
		},

		damage: "30+",

		effect: {
			ja: "この番、このポケモンが「マメバッタ」から進化していたなら、100ダメージ追加。",
			'zh-tw': "在這個回合，若這隻寶可夢從「豆蟋蟀」進化，則增加100點傷害。",
			th: "เทิร์นนี้ ถ้าโปเกมอนนี้วิวัฒนาการมาจาก [มาเมะบัตตะ] แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			id: "Jika pada giliran ini, Pokémon ini berevolusi dari Nymble, kerusakan yang diberikan bertambah sejumlah 100."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "スピードアタック",
			'zh-tw': "高速攻擊",
			th: "สปีดแอทแทก",
			id: "Speed Attack"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card