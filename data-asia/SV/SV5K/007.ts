import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "モンメン",
		'zh-tw': "木棉球",
		th: "โมนเมน"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	dexId: [546],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "綿を 飛ばして 身を 守る。 台風の 風に 流され 地球の 裏側に いくことも。",
		'zh-tw': "會噴出棉花保護身體。有時會被颱風吹到 地球的另一邊。",
		th: "ปล่อยนุ่นเพื่อป้องกันตัว บางครั้งเมื่อลอยไปตามลมพายุไต้ฝุ่น ก็จะไปถึงอีกฟากของโลกเลย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "トリプルスピン",
			'zh-tw': "三重旋轉",
			th: "ทริปเปิลสปิน"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752749
	}
}

export default card