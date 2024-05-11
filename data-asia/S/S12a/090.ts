import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "索羅亞",
		th: "โซรัว",
		ja: "ゾロア"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "平常很愛說話的孩子如果突然變得很沉默， 就有可能是索羅亞假扮的。",
		th: "เวลาที่เด็กช่างพูดเกิดเงียบขึ้นมา อาจเป็นเพราะโซรัวมาสลับตัวอยู่ก็เป็นได้",
		ja: "普段 おしゃべりな 子どもが 無口に なった ときは ゾロアが 入れ替わって いるかも しれないよ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "後踢",
			th: "เตะกลับหลัง",
			ja: "うしろげり"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [570]
}

export default card