import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ワッカネズミ",
		'zh-tw': "一對鼠",
		th: "วักคาเนซูมิ",
		id: "Tandemaus"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [924],
	hp: 30,
	types: ["Colorless"],

	description: {
		ja: "どんなときでも ２匹は 一緒。 見つけた エサは ぴったりと 半分こして 仲良く 食べる。",
		'zh-tw': "無論何時２隻都待在一起。會把尋獲的食物均分成兩半， 親密無間地一同進食。",
		th: "ไม่ว่าเมื่อไหร่ก็จะอยู่ด้วยกัน 2 ตัว เมื่อพบอาหารก็จะแบ่งเท่า ๆ กัน และกินด้วยกันอย่างสนิทสนม",
		id: "Tandemaus selalu berdua pada saat apa pun. Pokémon ini membagi dua dan memakan bersama makanan yang ditemukannya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かじる",
			'zh-tw': "咬",
			th: "แทะ",
			id: "Menggerogot"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card