import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "マイナン",
		'zh-tw': "負電拍拍",
		th: "ไมนัน"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [312],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "仲間を 応援する 習性。 負けそうになると 体から 出す 火花の 数が どんどん 増える。",
		'zh-tw': "有著為夥伴加油的習性。 當夥伴快要輸掉的時候， 體內迸發出的火花數量會不斷增多。",
		th: "มีนิสัยชอบให้กำลังใจแก่พวกพ้อง พอใกล้จะแพ้ ปริมาณของประกายไฟที่ปล่อยออกมาจากร่างกายจะเพิ่มมากขึ้นเรื่อย ๆ"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "バディパルス",
			'zh-tw': "拍檔脈衝",
			th: "บัดดี้พัลส์"
		},

		effect: {
			ja: "自分の場に「プラスル」がいるなら、はたらく。このポケモンがいるかぎり、相手は手札からエネルギーをポケモンにつけるたび、そのポケモンにダメカンを2個のせる。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			'zh-tw': "若自己的場上有「正電拍拍」則生效。只要這隻寶可夢在場上，每次對手從手牌將能量附於寶可夢身上時，在那隻寶可夢身上放置2個傷害指示物。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			th: "จะทำงาน ถ้าบนกระดานฝ่ายเรามี [พราเซิล] อยู่ ตราบใดที่โปเกมอนนี้ยังอยู่ ทุกครั้งที่ฝ่ายตรงข้ามติดการ์ดพลังงานจากบนมือที่โปเกมอน ให้วางตัวนับแดเมจ 2 ตัวบนโปเกมอนนั้น แม้จะมีโปเกมอนที่มีความสามารถนี้กี่ตัวก็ตาม เอฟเฟกต์นี้จะไม่เกิดผลซ้ำ"
		}
	}],

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "スピードボール",
			'zh-tw': "高速球",
			th: "สปีดบอล"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card