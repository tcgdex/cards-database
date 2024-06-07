import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハネッコ",
		'zh-tw': "毽子草",
		id: "Hoppip"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	dexId: [187],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "風に 流され かなりの 距離を 移動する。 パルデアの ハネッコが どこから 来たのかは はっきりしない。",
		'zh-tw': "會隨著風移動到很遠的地方。沒有人能具體指出帕底亞的 毽子草是從哪裡來的。",
		id: "Pokémon ini berpindah cukup jauh diterbangkan angin. Tidak diketahui kejelasan habitat asli dari Hoppip Paldea."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "はねてかわす",
			'zh-tw': "躍起閃避",
			id: "Lompat Menghindar"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card