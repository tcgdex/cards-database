import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "シードラ",
		'zh-tw': "海刺龍",
		th: "ซีดรา",
		id: "Seadra"
	},

	illustrator: "aspara",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [117],
	hp: 80,
	types: ["Water"],

	description: {
		ja: "細い 口だが 吸引力は 強い。 口より 大きな エサも 一瞬で 吸いこみ 食べるぞ。",
		'zh-tw': "嘴部雖然細，但吸力卻很強。就算是比嘴還要大的食物， 也都能瞬間吸進口裡吃掉。",
		th: "ถึงแม้ปากจะเรียวเล็กแต่มีพลังดูดสูง ไม่ว่าจะเป็นเหยื่อที่มีขนาดใหญ่กว่าปากของตนก็สามารถดูดเข้าไปกินได้ภายในชั่วพริบตา",
		id: "Mulut Seadra kecil, tapi kekuatan isapnya besar. Pokémon ini dalam sekejap dapat mengisap dan memakan makanan yang lebih besar dari ukuran mulutnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ブラインドインク",
			'zh-tw': "盲目塗墨",
			th: "ไบลด์อิงค์",
			id: "Blind Ink"
		},

		damage: 50,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを2回投げる。1回でもウラなら、そのワザは失敗。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式時，對手擲2次硬幣。只要出現1次反面，則那個招式失敗。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ ฝ่ายตรงข้ามทอยเหรียญ 2 ครั้ง ถ้าออกก้อยแม้แต่ 1 ครั้ง ท่าต่อสู้นั้นจะล้มเหลว",
			id: "Pada giliran lawan berikutnya, saat Pokémon yang menerima serangan ini menggunakan serangan, lawan melempar koin 2 kali. Jika salah satu hasilnya sisi belakang, serangan tersebut gagal."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card