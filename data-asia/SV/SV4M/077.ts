import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ポリゴンZ",
		th: "โพรีกอน-แซด"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	dexId: [474],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "追加 プログラムで 進化したと 言われるが ほんとうに 進化なのか 学会でも 意見が 分かれる。",
		th: "#N/A"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "バグターボ",
			th: "บั๊กเทอร์โบ"
		},

		effect: {
			ja: "自分の番に1回使える。コインを1回投げオモテなら、自分のトラッシュから基本エネルギーを4枚まで選び、このポケモンにつける。ウラなら、このポケモンについているエネルギーを1個選び、トラッシュする。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 4 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ ถ้าออกก้อย เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "エナジーアタック",
			th: "เอนเนอร์จี้แอทแทก"
		},

		damage: "40×",

		effect: {
			ja: "このポケモンについているエネルギーの数×40ダメージ。",
			th: "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้ x40"
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