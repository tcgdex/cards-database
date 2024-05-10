import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハクリュー",
		'zh-tw': "哈克龍",
		th: "ฮาคุริว",
		id: "Dragonair"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [148],
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "全身から オーラが 出されると あたりの 天候が みるみるうちに 変わっていく という。",
		'zh-tw': "據說牠全身上下散發出氣場時，周圍的天氣 就會在轉眼間為之一變。",
		th: "ว่ากันว่าอากาศโดยรอบจะเปลี่ยนไปทันทีที่มันปล่อยออร่าออกมาจากทั่วทั้งตัว",
		id: "Dikabarkan jika Dragonair mengeluarkan aura dari seluruh tubuhnya, cuaca di sekitarnya langsung berubah."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊",
			th: "ตี",
			id: "Menghantam"
		},

		damage: 20
	}, {
		cost: ["Water", "Lightning"],

		name: {
			ja: "アクアスラッシュ",
			'zh-tw': "水流斬",
			th: "อควาสแลช",
			id: "Aqua Slash"
		},

		damage: 90,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		}
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card