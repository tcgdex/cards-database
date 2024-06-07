import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍捲雲VMAX"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨風塵"
		},

		effect: {
			'zh-tw': "若場上有競技場卡，則增加120點傷害。然後，將那張競技場卡丟棄。"
		},

		damage: "120+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card