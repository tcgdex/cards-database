import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "クヌギダマ",
		'zh-tw': "榛果球",
		th: "คุนุกิดามะ",
		id: "Pineco"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [204],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "木の 皮を 重ね合わせて 殻を 分厚くするのが 大好き。 重くなっても 気にしない。",
		'zh-tw': "最喜歡把樹皮疊在身上加厚外殼。 就算因此變重也毫不在意。",
		th: "ชอบเอาเปลือกไม้มาทับซ้อนกันเพื่อให้เปลือกของตัวเองหนามากขึ้น ถึงจะหนักก็ไม่เป็นไร",
		id: "Pineco sangat suka mempertebal cangkangnya dengan menumpuk kulit pohon ke tubuhnya. Pokémon ini tidak merasa terganggu meskipun tubuhnya menjadi berat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "ころがる",
			'zh-tw': "滾動",
			th: "กลิ้ง",
			id: "Menggelinding"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card