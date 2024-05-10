import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ベロリンガ",
		'zh-tw': "大舌頭",
		th: "เบโรรินกา",
		id: "Lickitung"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [108],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "虫ポケモンが おもな エサ。 長い 舌で 相手を 舐めて 痺れた ところを 丸飲みにする。",
		'zh-tw': "蟲寶可夢是牠主要的食物。會用長長的舌頭去把對方 舔麻痺，然後趁機一口吞下。",
		th: "โปเกมอนแมลงเป็นอาหารหลักของมัน มันจะใช้ลิ้นยาวเลียเหยื่อเพื่อทำให้ตัวชาแล้วกลืนกินเข้าไปทั้งตัว",
		id: "Makanan utama Lickitung adalah Pokémon serangga. Pokémon ini melumpuhkan lawan dengan jilatan lidahnya yang panjang, lalu menelan lawannya bulat-bulat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ベロベロバインド",
			'zh-tw': "舔舔制約",
			th: "มัดติดแพล่บแพล่บ",
			id: "Jilat-jilat Mengikat"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card