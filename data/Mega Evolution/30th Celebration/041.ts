import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Rianti Hidayat",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Hang Down",
			fr: "Suspension",
			de: "Herunterhängen",
			es: "Prender",
			it: "Tirar Giù",
			'es-mx': "Colgadera"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			de: "Stromtritt",
			es: "Electropatada",
			it: "Dinamocalcio",
			'es-mx': "Electropatada"
		},

		damage: 40,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card