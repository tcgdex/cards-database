import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "エルフーン",
		'zh-tw': "風妖精",
		th: "เอลฟูน"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [547],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "綿を まき散らし イタズラする。 水を かけると 重くなって 動けなくなり 観念するぞ。",
		'zh-tw': "喜歡到處撒棉花搗蛋。沾水之後就會變重而 動彈不得，只能聽天由命。",
		th: "โปรยนุ่นเพื่อแกล้ง เมื่อราดน้ำจะหนักจนขยับไม่ได้แล้วถึงสำนึก"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かるがるヒール",
			'zh-tw': "柔柔治癒",
			th: "รักษาง่าย ๆ"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のバトル場のポケモンのHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべてトラッシュする。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。將自己的戰鬥場的【草】寶可夢的HP全部恢復。然後，將恢復的寶可夢身上附加的能量全部丟棄。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง ฟื้นฟู HP ทั้งหมดของโปเกมอน[หญ้า]บนตำแหน่งต่อสู้ฝ่ายเรา หลังจากนั้น ทิ้งพลังงานที่ติดอยู่กับโปเกมอนที่ฟื้นฟู ทั้งหมดที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "タネばくだん",
			'zh-tw': "種子炸彈",
			th: "ระเบิดเมล็ดพืช"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752750
	}
}

export default card