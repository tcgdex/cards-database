import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷你龍",
		th: "มินิริว",
		ja: "ミニリュウ"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'zh-tw': "棲息在瀑布潭等水流湍急的水邊。會藉由 反覆蛻皮不斷地長大。",
		th: "อาศัยอยู่ริมแม่น้ำที่ไหลเชี่ยวอย่างเช่นรอบแอ่งน้ำใต้น้ำตก ลอกคราบซ้ำไปซ้ำมาจนตัวโตใหญ่",
		ja: "滝つぼなど 流れの 激しい 水辺で 暮らしている。 脱皮を 繰り返して 大きく 育つ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "摔打",
			th: "ฟาดผัวะ",
			ja: "たたきつける"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30",
			ja: "コインを2回投げ、オモテの数×30ダメージ。"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [147],

	thirdParty: {
		cardmarket: 680209
	}
}

export default card