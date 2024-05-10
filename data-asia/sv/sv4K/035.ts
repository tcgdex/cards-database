import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "タタッコ",
		'zh-tw': "拳拳蛸",
		th: "ทาทักโกะ"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [852],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "３歳児 くらいの 賢さ。 触手は よくちぎれるが 再生するので 気にしない。",
		'zh-tw': "智商大致相當於３歲的兒童。雖然觸手經常斷掉，但因為 能再生，所以牠並不在意。",
		th: "สมองเท่ากับเด็กอายุ 3 ปี หนวดมักจะขาดบ่อย ๆ แต่ก็ไม่ต้องห่วงเพราะงอกใหม่ได้"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "フェイント",
			'zh-tw': "佯攻",
			th: "หลอก"
		},

		damage: 20,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。",
			th: "แดเมจของท่าต่อสู้นี้จะไม่นำความต้านทานมาคิด"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card