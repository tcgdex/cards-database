import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "アーボックex",
		'zh-tw': "阿柏怪ex",
		th: "อาร์บ็อกex",
		id: "Arbok ex"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "しばりつける",
			'zh-tw': "束縛",
			th: "มัดยึด",
			id: "Menjerat"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			ja: "メナスファング",
			'zh-tw': "脅迫獠牙",
			th: "คมเขี้ยวคุกคาม",
			id: "Menace Fang"
		},

		damage: 150,

		effect: {
			ja: "相手は相手自身の手札を2枚選び、トラッシュする。",
			'zh-tw': "對手選擇對手自己的2張手牌，將其丟棄。",
			th: "ฝ่ายตรงข้ามเลือกการ์ดบนมือฝ่ายตรงข้ามเอง 2 ใบ ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Lawan memilih 2 lembar Kartu Pegangannya, lalu membuangnya ke Trash."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card