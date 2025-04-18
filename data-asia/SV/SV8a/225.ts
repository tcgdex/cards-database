import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガチグマ アカツキex",
		id: "Ursaluna Bulan Merah ex",
		'zh-tw': "月月熊 赫月ex",
		'zh-cn': "月月熊 赫月ex"
	},

	illustrator: "Yano Keiji",
	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ろうれんのわざ",
			id: "Jurus Terlatih",
			'zh-tw': "老練招式",
			'zh-cn': "老練招式"
		},

		effect: {
			ja: "相手がすでにとったサイドの枚数ぶん、このポケモンが「ブラッドムーン」を使うためのエネルギーは少なくなる。",
			id: "Energi {Bening} yang dibutuhkan oleh Pokémon ini untuk menggunakan Bulan Darah berkurang untuk tiap lembar Kartu Point yang telah diambil lawan.",
			'zh-tw': "這隻寶可夢使用「血月」所需的【無】能量，減少對手已經獲得的獎賞卡的張數數量。",
			'zh-cn': "這隻寶可夢使用「血月」所需的【無】能量，減少對手已經獲得的獎賞卡的張數數量。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ブラッドムーン",
			id: "Bulan Darah",
			'zh-tw': "血月",
			'zh-cn': "血月"
		},

		damage: 240,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card