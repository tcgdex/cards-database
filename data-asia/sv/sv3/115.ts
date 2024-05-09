import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "デルビル"
	},

	illustrator: "KYUPIYAMA",
	category: "Pokemon",
	dexId: [228],
	hp: 50,
	types: ["Darkness"],

	description: {
		ja: "様々な 鳴き声を 使い分け 仲間と コミュニケーションしながら 狩りを おこなう 賢さを持つ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "むれのれんけい"
		},

		effect: {
			ja: "自分のベンチの「デルビル」全員に、山札から「基本エネルギー」を1枚ずつつける。そして山札を切る。"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "きあいのキバ"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card