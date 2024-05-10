import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "デスカーンex",
		'zh-tw': "死神棺ex",
		th: "เดธคานex"
	},

	illustrator: "kawayoo",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こがねのひつぎ",
			'zh-tw': "金色棺木",
			th: "โลงทอง"
		},

		effect: {
			ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
			'zh-tw': "這隻寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。",
			th: "เมื่อโปเกมอนนี้ ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว เลือกการ์ดที่ชอบ 1 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ホロウハンズ",
			'zh-tw': "陰森之手",
			th: "ฮอลโลว์แฮนด์"
		},

		damage: 110,

		effect: {
			ja: "ダメカン5個を、相手のベンチポケモンに好きなようにのせる。",
			'zh-tw': "將5個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
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
	regulationMark: "G"
}

export default card