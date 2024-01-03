import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Voltorbe",
		en: "Voltorb",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Boule Éclair",
			en: "Lightning Ball",
			es: "Bola Relámpago",
			it: "Fulminpalla",
			pt: "Bola de Raios",
			de: "Kugelblitz"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Roulade",
			en: "Rollout",
			es: "Rodar",
			it: "Rotolamento",
			pt: "Rolagem",
			de: "Walzer"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card