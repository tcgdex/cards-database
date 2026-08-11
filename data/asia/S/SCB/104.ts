import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大舌頭"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "會用舌頭把髒污舔乾淨。舔過的地方會有點臭，是否真的乾淨令人懷疑。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "舌擊"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "頭突"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card