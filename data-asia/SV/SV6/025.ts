import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロボン",
		'zh-tw': "蚊香泳士",
		th: "เนียวโรบอน"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Nisota Niso",
	dexId: [62],
	hp: 170,
	types: ["Water"],

	description: {
		ja: "発達した 手足を 使って ほんの 一瞬だけなら 水の上を 走ることができる。",
		'zh-tw': "如果只是一瞬間的話， 牠能夠用肌肉發達的 四肢在水上奔跑。",
		th: "สามารถวิ่งเหนือน้ำได้ชั่วครู่ด้วยแขนและขาที่พัฒนาขึ้นมา"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "さいみんじゅつ",
			'zh-tw': "催眠術",
			th: "สะกดจิต"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ジャンピングアッパー",
			'zh-tw': "跳躍衝天",
			th: "กระโดดอัดเสย"
		},

		damage: "120+",

		effect: {
			ja: "のぞむなら、120ダメージ追加。その場合、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			'zh-tw': "若希望，增加120點傷害。這個情況下，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			th: "หากต้องการ การโจมตีนี้จะเพิ่มแดเมจอีก 120 เมื่อทำเช่นนั้นแล้ว นำการ์ดโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดฝ่ายเราแล้วสับ"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card