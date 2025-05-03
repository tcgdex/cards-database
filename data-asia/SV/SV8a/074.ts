import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノブジンex",
		id: "Iron Valiant ex",
		th: "นักรบเหล็กex",
		'zh-tw': "鐵武者ex",
		'zh-cn': "鐵武者ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "タキオンビット",
			id: "Tachyon Bit",
			th: "แทคีออนบิต",
			'zh-tw': "超光速位元",
			'zh-cn': "超光速位元"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。相手のポケモン1匹に、ダメカンを2個のせる。",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat Pokémon ini masuk dari Cadangan ke Arena Bertarung. Letakkan 2 Token Kerusakan pada 1 Pokémon lawan.",
			th: "ในเทิร์นฝ่ายเรา เมื่อโปเกมอนนี้ออกจากเบนช์มาที่ตำแหน่งต่อสู้ ใช้ได้ 1 ครั้ง วางตัวนับแดเมจ 2 ตัว บนโปเกมอนฝ่ายตรงข้าม 1 ตัว",
			'zh-tw': "在自己的回合，從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。",
			'zh-cn': "在自己的回合，從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "レーザーブレード",
			id: "Laser Blade",
			th: "เลเซอร์เบลด",
			'zh-tw': "鐳射利刃",
			'zh-cn': "鐳射利刃"
		},

		damage: 200,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card