import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿爾宙斯VSTAR",
		th: "อาร์เซอุสVSTAR",
		ja: "アルセウスVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "星星誕生",
			th: "สตาร์เบิร์ท"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。[對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "ใช้ได้ในเทิร์นฝ่ายเรา เลือกการ์ดที่ชอบได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด [ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "三重新星",
			th: "ทรินิตี้โนวา",
			ja: "トリニティノヴァ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張基本能量卡，以任意方式附於自己的「寶可夢【V】」身上。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ติดที่ [โปเกมอน【V】] ฝ่ายเราตามชอบ แล้วสับสำรับการ์ด",
			ja: "自分の山札から基本エネルギーを3枚まで選び、自分の「ポケモンV」に好きなようにつける。そして山札を切る。"
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "スターバース"
		},

		effect: {
			ja: "自分の番に使える。自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 687689
	}
}

export default card