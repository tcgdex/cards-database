import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "カビゴン",
		'zh-tw': "卡比獸",
		th: "คาบิกอน"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [143],
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "胃袋の 消化液は どんな 毒も 消化できる。 落ちているものを 食べても 平気。",
		'zh-tw': "胃裡的消化液能夠消化掉 所有的毒。就算吃下掉在 地上的東西也沒問題。",
		th: "น้ำย่อยในกระเพาะอาหารสามารถย่อยสลายพิษได้ทุกชนิด ถึงกินของที่ตกอยู่บนพื้นก็ไม่เป็นอะไร"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はらごしらえ",
			'zh-tw': "吃飽先",
			th: "กินรองท้อง"
		},

		effect: {
			ja: "自分の手札からエネルギーを1枚選び、このポケモンにつける。その後、このポケモンのHPを「60」回復する。",
			'zh-tw': "從自己的手牌選擇1張能量卡，附於這隻寶可夢身上。然後，將這隻寶可夢恢復「60」HP。",
			th: "เลือกการ์ดพลังงาน 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนนี้ หลังจากนั้น ฟื้นฟู HP ของโปเกมอนนี้ [60]"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヘビーインパクト",
			'zh-tw': "重磅衝擊",
			th: "เฮฟวีอิมแพกต์"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 761511
	}
}

export default card