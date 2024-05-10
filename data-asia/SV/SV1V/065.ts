import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ワッカネズミ",
		'zh-tw': "一對鼠",
		th: "วักคาเนซูมิ",
		id: "Tandemaus"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [924],
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "どんなときでも ２匹は 一緒。 見つけた エサは ぴったりと 半分こして 仲良く 食べる。",
		'zh-tw': "無論何時２隻都待在一起。會把尋獲的食物均分成兩半， 親密無間地一同進食。",
		th: "ไม่ว่าเมื่อไหร่ก็จะอยู่ด้วยกัน 2 ตัว เมื่อพบอาหารก็จะแบ่งเท่า ๆ กัน และกินด้วยกันอย่างสนิทสนม",
		id: "Tandemaus selalu berdua pada saat apa pun. Pokémon ini membagi dua dan memakan bersama makanan yang ditemukannya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ダブルアタック",
			'zh-tw': "二連擊",
			th: "ดับเบิลแอทแทก",
			id: "Serangan Ganda"
		},

		damage: "30×",

		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card