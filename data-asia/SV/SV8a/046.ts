import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "イルカマンex",
		id: "Palafin ex",
		th: "อิรุกะแมนex",
		'zh-tw': "海豚俠ex",
		'zh-cn': "海豚俠ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マイティソウル",
			id: "Jiwa Perkasa",
			th: "ไมตี้โซล",
			'zh-tw': "全能靈魂",
			'zh-cn': "全能靈魂"
		},

		effect: {
			ja: "このカードは、「イルカマン」の特性「マイティチェンジ」の効果によってしか場に出せない。",
			id: "Kartu ini hanya dapat dimasukkan ke Arena menggunakan efek dari Ability Menjadi Perkasa Palafin.",
			th: "การ์ดนี้ สามารถวางบนกระดานได้ด้วยเอฟเฟกต์ของความสามารถ [แปลงร่างขั้นสุดยอด] ของ [อิรุกะแมน] เท่านั้น",
			'zh-tw': "這張卡只可依據「海豚俠」的特性「全能變身」的效果放置於場上。",
			'zh-cn': "這張卡只可依據「海豚俠」的特性「全能變身」的效果放置於場上。"
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ギガインパクト",
			id: "Giga Impact",
			th: "กิก้าอิมแพกต์",
			'zh-tw': "終極衝擊",
			'zh-cn': "終極衝擊"
		},

		damage: 250,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card