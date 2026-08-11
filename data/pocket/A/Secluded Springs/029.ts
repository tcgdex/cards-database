import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Stunfisk",
		fr: "Limonde"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [618],
	hp: 90,
	types: ["Lightning"],

	description: {
		en: "Thanks to bacteria that lived in the mud flats with\nit, this Pokémon developed the organs it uses to\ngenerate electricity.",
		fr: "Les vasières sont son habitat de prédilection. Il a développé un organe générant de l'électricité grâce aux bactéries présentes dans la boue."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Static Shock",
			fr: "Choc Statique"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card