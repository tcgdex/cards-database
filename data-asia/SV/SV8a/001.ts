import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "スボミー",
		id: "Budew",
		th: "ซึโบมี",
		'zh-tw': "含羞苞",
		'zh-cn': "含羞苞"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "None",
	category: "Pokemon",
	dexId: [406],
	hp: 30,
	types: ["Grass"],

	description: {
		ja: "毒を 含んだ 花粉を まく。 きれいな 水で 育てるほど 毒の 成分は 高まる。",
		id: "Budew menyebarkan serbuk sari yang mengandung racun. Makin jernih air yang digunakan untuk membesarkan Pokémon ini, makin tinggi kandungan racunnya.",
		th: "กระจายละอองเกสรพิษออกมา ยิ่งเลี้ยงด้วยน้ำที่สะอาดมากเท่าไหร่ พิษยิ่งมีความรุนแรงมากขึ้นเท่านั้น",
		'zh-tw': "會散佈帶有毒素的花粉。 培育時所用的水越乾淨， 所含有的毒性就越高。",
		'zh-cn': "會散佈帶有毒素的花粉。 培育時所用的水越乾淨， 所含有的毒性就越高。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "むずむずかふん",
			id: "Serbuk Sari Geli-geli Gatal",
			th: "ละอองเกสรคันยิบ ๆ",
			'zh-tw': "癢癢花粉",
			'zh-cn': "癢癢花粉"
		},

		damage: 10,

		effect: {
			ja: "次の相手の番、相手は手札からグッズを出して使えない。",
			id: "Pada giliran lawan berikutnya, lawan tidak dapat memainkan Item dari Kartu Pegangan.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม ฝ่ายตรงข้ามไม่สามารถนำการ์ดไอเท็มจากบนมือ ออกมาใช้ได้",
			'zh-tw': "在下個對手的回合，對手無法從手牌使出物品卡。",
			'zh-cn': "在下個對手的回合，對手無法從手牌使出物品卡。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card