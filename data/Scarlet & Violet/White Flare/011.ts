import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [498],
	set: Set,

	name: {
		en: "Tepig",
		fr: "Gruikui",
		de: "Floink",
		it: "Tepig",
		pt: "Tepig",
		es: "Tepig",
		'es-mx': "Tepig"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			pt: "Investida",
			es: "Placaje",
			'es-mx': "Tacleada"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			de: "Walzer",
			it: "Rotolamento",
			pt: "Rolagem",
			es: "Rodar",
			'es-mx': "Rodada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card