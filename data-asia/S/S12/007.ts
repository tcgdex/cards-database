import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿利多斯",
		th: "อาริอาโดส",
		ja: "アリアドス"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "會吐絲來捕捉獵物。每到夜晚就會離開巢穴， 積極地展開狩獵。",
		th: "จับเหยื่อด้วยการพ่นใย พอถึงเวลากลางคืนจะออกห่างจากรังเพื่อออกล่าเหยื่ออย่างจริงจัง",
		ja: "糸を はいて 獲物を 捕らえる。 夜に なると 巣から 離れて 積極的に 狩りを するぞ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "陰翳絲",
			th: "ด้ายหม่นหมอง",
			ja: "かげりのいと"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手的「寶可夢【VSTAR】」使用招式所需的能量增加1個【無】能量。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ [โปเกมอน【VSTAR】] ฝ่ายตรงข้าม พลังงานสำหรับใช้ท่าต่อสู้จะใช้พลังงาน[ไร้สี]เพิ่มขึ้น 1 ลูก แม้จะมีโปเกมอนที่มีความสามารถนี้กี่ตัวก็ตาม เอฟเฟกต์นี้จะไม่เกิดผลซ้ำ",
			ja: "このポケモンがいるかぎり、相手の「ポケモンVSTAR」は、ワザを使うためのエネルギーが、エネルギー1個ぶん多くなる。この効果は、この特性を持つポケモンが何匹いても、重ならない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "突刺",
			th: "แทง",
			ja: "つきさす"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [168],

	thirdParty: {
		cardmarket: 680146
	}
}

export default card