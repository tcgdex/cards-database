import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [101],
	set: Set,

	name: {
		fr: "Électrode",
		en: "Electrode",
		es: "Electrode",
		it: "Electrode",
		pt: "Electrode",
		de: "Lektrobal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

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

		damage: 60
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Roulé-Boulé",
			en: "Rolling Tackle",
			es: "Placaje Giro",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			de: "Rolltackle"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	}
}

export default card