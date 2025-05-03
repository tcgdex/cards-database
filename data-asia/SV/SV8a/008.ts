import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "カジッチュ",
		id: "Applin",
		th: "คาจิชชู",
		'zh-tw': "啃果蟲",
		'zh-cn': "啃果蟲"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "None",
	category: "Pokemon",
	dexId: [840],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "りんごの 中で 暮らしている。 りんごが なくなると 体の 水分が 抜けて 弱ってしまう。",
		id: "Applin hidup di dalam buah apel. Jika apelnya habis, Pokémon ini akan melemah karena kehilangan cairan tubuhnya.",
		th: "อาศัยอยู่ในแอปเปิล พอไม่มีแอปเปิลแล้วจะสูญเสียน้ำในร่างกายและอ่อนแอลง",
		'zh-tw': "平時都在蘋果中生活。 如果失去了蘋果，身體的 水分就會流失而變得虛弱。",
		'zh-cn': "平時都在蘋果中生活。 如果失去了蘋果，身體的 水分就會流失而變得虛弱。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "しるをとばす",
			id: "Menyemprotkan Getah",
			th: "ฉีดพ่นน้ำ",
			'zh-tw': "噴汁",
			'zh-cn': "噴汁"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card