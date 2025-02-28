import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "リーフィアex",
		id: "Leafeon ex",
		th: "ลีเฟียex",
		'zh-tw': "葉伊布ex",
		'zh-cn': "葉伊布ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "あおばのあらし",
			id: "Badai Daun Segar",
			th: "พายุใบไม้เขียวขจี",
			'zh-tw': "綠葉風暴",
			'zh-cn': "綠葉風暴"
		},

		damage: "60×",

		effect: {
			ja: "相手のポケモン全員についているエネルギーの数×60ダメージ。",
			id: "Serangan ini memberikan kerusakan sejumlah 60 untuk tiap Energi yang dikenakan pada semua Pokémon lawan.",
			th: "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนฝ่ายตรงข้ามทุกตัว x60",
			'zh-tw': "造成對手的所有寶可夢身上附加的能量的數量×60點傷害。",
			'zh-cn': "造成對手的所有寶可夢身上附加的能量的數量×60點傷害。"
		}
	}, {
		cost: ["Grass", "Fire", "Water"],

		name: {
			ja: "モスアゲート",
			id: "Moss Agate",
			th: "มอสอาเกต",
			'zh-tw': "苔紋瑪瑙",
			'zh-cn': "苔紋瑪瑙"
		},

		damage: 230,

		effect: {
			ja: "自分のベンチポケモン全員のHPを、それぞれ「100」回復する。",
			id: "Pulihkan HP semua Pokémon Cadangan sendiri masing-masing sejumlah 100.",
			th: "ฟื้นฟู HP ของโปเกมอนบนเบนช์ฝ่ายเราทุกตัว ตัวละ [100]",
			'zh-tw': "將自己的所有備戰寶可夢各恢復「100」HP。",
			'zh-cn': "將自己的所有備戰寶可夢各恢復「100」HP。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card