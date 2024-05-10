import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "タマンタ",
		'zh-tw': "小球飛魚",
		th: "ทาแมนทา"
	},

	illustrator: "rika",
	category: "Pokemon",
	dexId: [458],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "テッポウオの 群れに 混ざって 泳ぐ。 敵に 襲われると 群れと いっしょに 戦うよ。",
		'zh-tw': "混在鐵炮魚的大群裡游泳。受到敵人襲擊的時候， 會和鐵炮魚們並肩作戰。",
		th: "ว่ายน้ำรวมกับฝูงเทปโปโอ เมื่อถูกศัตรูโจมตีจะต่อสู้ด้วยกันเป็นฝูง"
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "ぷかぷかヒーリング",
			'zh-tw': "吐泡泡治療",
			th: "ลอยตุ๊บป่องฟื้นพลัง"
		},

		effect: {
			ja: "自分のベンチポケモン1匹のHPを「120」回復する。",
			'zh-tw': "將自己的1隻備戰寶可夢恢復「120」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว [120]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card