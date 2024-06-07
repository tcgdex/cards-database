import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蓋諾賽克特V",
		th: "เกโนเซ็กท์V",
		ja: "ゲノセクトV"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "匯流系統",
			th: "ฟิวชันซิสเท็ม",
			ja: "フュージョンシステム"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從牌庫抽卡直到自己的手牌的張數與自己的場上「匯流」寶可夢的數量相同為止。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ดจากสำรับการ์ด จนจำนวนการ์ดบนมือฝ่ายเราเป็นจำนวนเท่ากับจำนวนโปเกมอน บนกระดานฝ่ายเรา",
			ja: "自分の番に1回使える。自分の手札の枚数が、自分の場の「フュージョン」のポケモンの数と同じ枚数になるように、山札を引く。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "高科技光炮",
			th: "เทคโนบัสเตอร์",
			ja: "テクノバスター"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 210,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare"
}

export default card