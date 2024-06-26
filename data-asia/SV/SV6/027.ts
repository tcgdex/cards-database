import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "アズマオウ",
		'zh-tw': "金魚王",
		th: "อซึมาโอ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Gemi",
	dexId: [119],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "秋になると プロポーズのため 体に 脂が のってきて とても きれいな色に 変化する。",
		'zh-tw': "到了秋天，體內的脂肪 會因為要求偶而增加， 體色也會變得非常漂亮。",
		th: "เมื่อเข้าสู่ฤดูใบไม้ร่วง ร่างกายจะมีไขมันออกมาตามตัวและเปลี่ยนเป็นสีที่สวยงามมาก เพื่อรอผสมพันธุ์"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "つつきおとす",
			'zh-tw': "啄落",
			th: "จิกลงมา"
		},

		damage: 50,

		effect: {
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。",
			th: "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "つのドリル",
			'zh-tw': "角鑽",
			th: "เขาสว่าน"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card