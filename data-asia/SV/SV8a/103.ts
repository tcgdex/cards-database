import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "マシマシラex",
		id: "Munkidori‌ ex",
		th: "มาชิมาชิระex",
		'zh-tw': "願增猿ex",
		'zh-cn': "願增猿ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ひょうしぬけ",
			id: "Bikin Kecele",
			th: "ผิดคาด",
			'zh-tw': "鬆口氣",
			'zh-cn': "鬆口氣"
		},

		effect: {
			ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の場に「モモワロウex」がいるなら、とられるサイドは1枚少なくなる。",
			id: "Jika ada Pecharunt {ex} di Arena sendiri saat Pokémon ini KO karena menerima kerusakan akibat serangan dari Pokémon lawan, Kartu Point yang diambil lawan berkurang 1 lembar.",
			th: "เมื่อโปเกมอนนี้ ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว ถ้าบนกระดานฝ่ายเรามี [โมโมวาโร่【ex】] อยู่ การ์ดรางวัลที่หยิบได้จะลดลง 1 ใบ",
			'zh-tw': "這隻寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，若自己的場上有「桃歹郎【ex】」，則被獲得的獎賞卡減少1張。",
			'zh-cn': "這隻寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，若自己的場上有「桃歹郎【ex】」，則被獲得的獎賞卡減少1張。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ダーティヘッド",
			id: "Dirty Headbutt",
			th: "‌เดอร์ตี้เฮด",
			'zh-tw': "惡劣頭擊",
			'zh-cn': "惡劣頭擊"
		},

		damage: 190,

		effect: {
			ja: "次の自分の番、このポケモンは「ダーティヘッド」が使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Dirty Headbutt.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [เดอร์ตี้เฮด] ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「惡劣頭擊」。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「惡劣頭擊」。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card