import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Boltund",
		fr: "Fulgudog"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Yamper"
	},

	description: {
		en: "This Pokémon generates electricity and channels\nit into its legs to keep them going strong.\nBoltund can run nonstop for three full days.",
		fr: "Il produit de l'électricité puis la transfère dans ses pattes pour mieux courir. Ainsi, il peut foncer pendant trois jours et trois nuits."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Defiant Spark",
			fr: "Étincelle Rebelle"
		},

		damage: 70,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			en: "If this Pokémon has damage on it, this attack can be used for 1 {L} Energy.",
			fr: "Si ce Pokémon a subi des dégâts, cette attaque peut être utilisée pour une Énergie {L}."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card