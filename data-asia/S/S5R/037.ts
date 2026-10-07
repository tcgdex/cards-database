import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "サッチムシ" },
	dexId: [825],
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "レドームシ",
		'zh-tw': "天罩蟲",
		th: "เลโดมุชิ"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "殻の 中で 成長中。 サイコパワーで 外の 様子を うかがい 進化に 備えている。",
		'zh-tw': "正在殼裡成長著。用精神力量掌握外界的狀況，做好進化的準備。",
		th: "กำลังเติบโตอยู่ในกระดอง รับรู้สภาพการณ์ภายนอกด้วยพลังจิต กำลังเตรียมตัวเพื่อวิวัฒนาการ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "レーダー",
			'zh-tw': "雷達",
			th: "เรดาร์"
		},

		effect: {
			ja: "自分の山札を上から4枚見て、好きな順番に入れ替えて、山札の上にもどす。",
			'zh-tw': "查看自己的牌庫上方4張卡，以任意順序排列，放回牌庫上方。",
			th: "ดูการ์ดในสำรับฝ่ายเราจากด้านบน 4 ใบ เรียงตามลำดับที่ชอบ แล้วใส่กลับสำรับการ์ดจากด้านบน"
		},

		cost: ["Psychic"]
	}, {
		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞",
			th: "กระแทก"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
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
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533757, tcgplayer: 569078, cardtrader: 240043 } }
	]
}

export default card