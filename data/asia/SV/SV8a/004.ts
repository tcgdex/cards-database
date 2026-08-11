import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "モンメン",
		'id-id': "Cottonee",
		'th-th': "โมนเมน",
		'zh-tw': "木棉球",
		'zh-cn': "木棉球"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "None",
	category: "Pokemon",
	dexId: [546],
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "綿を 飛ばして 身を 守る。 台風の 風に 流され 地球の 裏側に いくことも。",
		'id-id': "Cottonee menyemburkan kapas untuk melindungi dirinya. Saat badai, kadang ada yang terbawa angin topan hingga ke belahan lain planet.",
		'th-th': "ปล่อยนุ่นเพื่อป้องกันตัว บางครั้งเมื่อลอยไปตามลมพายุไต้ฝุ่น ก็จะไปถึงอีกฟากของโลกเลย",
		'zh-tw': "會噴出棉花保護身體。 有時會被颱風吹到 地球的另一邊。",
		'zh-cn': "會噴出棉花保護身體。 有時會被颱風吹到 地球的另一邊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "トリプルスピン",
			'id-id': "Triple Spin",
			'th-th': "ทริปเปิลสปิน",
			'zh-tw': "三重旋轉",
			'zh-cn': "三重旋轉"
		},

		damage: "10×",

		effect: {
			'ja-jp': "コインを3回投げ、オモテの数×10ダメージ。",
			'id-id': "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan.",
			'th-th': "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			'zh-cn': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803117,
				tcgplayer: 602324,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604504,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602325,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card