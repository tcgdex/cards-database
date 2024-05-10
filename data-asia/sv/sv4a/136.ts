import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "モトトカゲ",
		'zh-tw': "摩托蜥",
		th: "โมโตโทคาเงะ",
		id: "Cyclizar",
		'zh-cn': "摩托蜥"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [967],
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "大昔から 人を 背中に 乗せていたらしい。 １万年前の 壁画に 様子が 描かれている。",
		'zh-tw': "似乎自古就會讓人類坐在背上。１萬年前的 壁畫上描繪著該模樣。",
		th: "ดูเหมือนว่าจะให้ผู้คนขี่บนหลังมาตั้งแต่สมัยโบราณ มีการวาดภาพของมันบนจิตรกรรมฝาผนังเมื่อ 1 หมื่นปีที่แล้ว",
		id: "Kabarnya, sudah sejak dahulu kala manusia menunggangi punggung Cyclizar. Situasi tersebut terlukiskan dalam sebuah mural dari 10 ribu tahun lalu.",
		'zh-cn': "似乎自古就會讓人類坐在背上。１萬年前的 壁畫上描繪著該模樣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Darkness", "Colorless"],

		name: {
			ja: "こうそくドライブ",
			'zh-tw': "高速猛衝",
			th: "ขับเร็วจี๋",
			id: "Berkendara Berkecepatan Tinggi",
			'zh-cn': "高速猛衝"
		},

		damage: 100,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan.",
			'zh-cn': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card