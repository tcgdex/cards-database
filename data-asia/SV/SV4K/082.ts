import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "デスカーンex",
		th: "เดธคานex"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こがねのひつぎ",
			th: "โลงทอง"
		},

		effect: {
			ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
			th: "เมื่อโปเกมอนนี้ ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว เลือกการ์ดที่ชอบ 1 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ホロウハンズ",
			th: "ฮอลโลว์แฮนด์"
		},

		damage: 110,

		effect: {
			ja: "ダメカン5個を、相手のベンチポケモンに好きなようにのせる。",
			th: "วางตัวนับแดเมจ 5 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามตามชอบ"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741354
	}
}

export default card