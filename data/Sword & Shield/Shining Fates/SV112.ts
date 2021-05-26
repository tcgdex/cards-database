import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Salarsen V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Direct Toxik"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			fr: "Émeute Électrique"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 90 dégâts supplémentaires."
		},

		damage: "90+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card