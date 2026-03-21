import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "葉伊布VSTAR",
		th: "ลีเฟียVSTAR",
		ja: "リーフィアVSTAR"
	},

	illustrator: "PLANETA Hiiragi",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "常春藤星星",
			th: "ไอวี่สตาร์"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。[對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "ใช้ได้ในเทิร์นฝ่ายเรา เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว แล้วสลับกับโปเกมอนบนตำแหน่งต่อสู้ {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "葉子防守",
			th: "ใบไม้ป้องกัน",
			ja: "リーフガード"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับ จะถูก [-30]",
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
		},

		damage: 180,
		cost: ["Grass", "Grass", "Colorless"]
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "アイビースター"
		},

		effect: {
			ja: "自分の番に使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 687492
	}
}

export default card