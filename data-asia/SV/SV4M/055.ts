import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ワッカネズミ",
		'zh-tw': "一對鼠",
		th: "วักคาเนซูมิ"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [924],
	hp: 30,
	types: ["Colorless"],

	description: {
		ja: "どんなときでも ２匹は 一緒。 見つけた エサは ぴったりと 半分こして 仲良く 食べる。",
		'zh-tw': "無論何時２隻都待在一起。會把尋獲的食物均分成兩半，親密無間地一同進食。",
		th: "ไม่ว่าเมื่อไหร่ก็จะอยู่ด้วยกัน 2 ตัว เมื่อพบอาหารก็จะแบ่งเท่า ๆ กัน และกินด้วยกันอย่างสนิทสนม"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ダメージラッシュ",
			'zh-tw': "傷害衝刺",
			th: "แดเมจรัช"
		},

		damage: "10×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card