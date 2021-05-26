import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Limonde de Galar"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Troquenard"
		},

		effect: {
			fr: "Si ce Pokémon est sur le Poste Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même s’il est mis K.O.), défaussez une Énergie du Pokémon Attaquant."
		}
	}],

	attacks: [{
		name: {
			fr: "Charge Destructrice"
		},

		effect: {
			fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face."
		},

		damage: "30+",
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card