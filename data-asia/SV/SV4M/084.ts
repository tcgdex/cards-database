import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "イッカネズミex",
		th: "อิกคาเนซูมิex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いっちだんけつ",
			th: "น้ำหนึ่งใจเดียว"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、自分の場の「ワッカネズミ」と「イッカネズミ（『ポケモンex』をふくむ）」の数×3個ぶんのダメカンを、ワザを使ったポケモンにのせる。",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจบนโปเกมอนที่ใช้ท่าต่อสู้ ตามจำนวน [วักคาเนซูมิ] และ [อิกคาเนซูมิ (รวม [โปเกมอน【ex】])] บนกระดานฝ่ายเรา x3 ตัว"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "がっつくまえば",
			th: "ฟันหน้าจอมตะกละ"
		},

		damage: 120,

		effect: {
			ja: "自分の山札を2枚引く。",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card