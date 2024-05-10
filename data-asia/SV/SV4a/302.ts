import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オンバット",
		'zh-tw': "嗡蝠",
		id: "Noibat"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	dexId: [714],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "大きな 耳から 超音波を 出して エサの 果物を 探す。 カジッチュを エサと 間違える。",
		'zh-tw': "從大大的耳朵發出超音波，尋找水果來填飽肚子。 會把啃果蟲誤認成食物。",
		id: "Noibat mengeluarkan gelombang ultrasonik dari kuping besarnya untuk mencari buah makanannya. Ia keliru mengira Applin sebagai makanannya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Darkness"],

		name: {
			ja: "かぜおこし",
			'zh-tw': "起風",
			id: "Hembusan Angin"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card