import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "N's Darumaka",
		fr: "Darumarond de N",
		es: "Darumaka de N",
		de: "Ns Flampion",
		it: "Darumaka di N",
		pt: "Darumaka do N",
		'es-mx': "Darumaka de N"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			de: "Rolltackle",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			'es-mx': "Tacleada Rodante"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			de: "Flackern",
			it: "Fiammata",
			pt: "Chama",
			'es-mx': "Llama"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
