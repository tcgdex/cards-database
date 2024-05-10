import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ウデッポウ",
		'zh-tw': "鐵臂槍蝦",
		th: "อุเด็ปโป",
		id: "Clauncher"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [692],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ハサミは 取れても 再生する。 中の 身は 食べられるが クセが 強いので 好みは 分かれる。",
		'zh-tw': "鉗子即使脫落也會再長出來。裡面的肉雖然可以食用， 但味道過於獨特而喜惡分明。",
		th: "ถึงก้ามจะหลุดไป ก็งอกใหม่ได้ เนื้อในก้ามสามารถกินได้แต่รสชาติค่อนข้างเป็นเอกลักษณ์ เลยมีทั้งคนชอบและไม่ชอบ",
		id: "Capit Clauncher akan tumbuh kembali jika putus. Daging dalam capitnya bisa dimakan, namun karena rasanya kuat, ada yang menyukainya dan ada juga yang tidak."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "はさむ",
			'zh-tw': "夾住",
			th: "หนีบ",
			id: "Capitan Keras"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card