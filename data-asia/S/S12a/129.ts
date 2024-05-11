import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 索羅亞克VSTAR",
		th: "ฮิซุย โซโรอาร์คVSTAR"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "幻影星星",
			th: "แฟนธอมสตาร์"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。將自己的手牌全部丟棄，從牌庫抽出7張卡。[對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "ใช้ได้ในเทิร์นฝ่ายเรา ทิ้งการ์ดบนมือฝ่ายเราทั้งหมดที่ตำแหน่งทิ้งการ์ด แล้วจั่วการ์ด 7 ใบจากสำรับการ์ด {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "牢記詛咒",
			th: "จารึกคำสาป"
		},

		effect: {
			'zh-tw': "造成自己的場上身上放置有傷害指示物的寶可夢的數量×50點傷害。",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอนบนกระดานฝ่ายเราที่มีตัวนับแดเมจวางอยู่ x50"
		},

		damage: "50×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card