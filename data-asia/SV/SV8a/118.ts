import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドラメシヤ",
		id: "Dreepy",
		th: "โดราเมชิยะ",
		'zh-tw': "多龍梅西亞",
		'zh-cn': "多龍梅西亞"
	},

	illustrator: "Scav",
	rarity: "None",
	category: "Pokemon",
	dexId: [885],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "食べもしないのに ウデッポウに 食らいつくのは 生きていたころの 行動の 名残りと 言われている。",
		id: "Dikatakan bahwa alasan Dreepy menggigit erat Clauncher meskipun ia tidak memakannya adalah perilaku bawaan ketika ia masih hidup.",
		th: "ว่ากันว่าที่มันชอบกัดอุเด็ปโปไว้ไม่ปล่อยแม้จะไม่กินเป็นอาหารนั้นเป็นการกระทำที่มันเคยทำตอนที่มันยังมีชีวิต",
		'zh-tw': "明明不吃卻又愛死咬著 鐵臂槍蝦不放，聽說是牠 生前殘留下來的活動習性。",
		'zh-cn': "明明不吃卻又愛死咬著 鐵臂槍蝦不放，聽說是牠 生前殘留下來的活動習性。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ちょっとうらむ",
			id: "Mendendam Sedikit",
			th: "เจ็บแค้นหน่อย",
			'zh-tw': "咒怨一下",
			'zh-cn': "咒怨一下"
		},

		damage: 10
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			ja: "かみつく",
			id: "Menggigit",
			th: "กัดติด",
			'zh-tw': "咬住",
			'zh-cn': "咬住"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card