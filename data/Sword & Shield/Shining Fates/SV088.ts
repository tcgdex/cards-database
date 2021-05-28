import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Limonde de Galar",
		en: "Galarian Stunfisk"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Troquenard",
			en: "Snap Trap"
		},

		effect: {
			fr: "Si ce Pokémon est sur le Poste Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même s’il est mis K.O.), défaussez une Énergie du Pokémon Attaquant.",
			en: "If this Pokémon is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), discard an Energy from the Attacking Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Charge Destructrice",
			en: "Damage Rush"
		},

		effect: {
			fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads."
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

	retreat: 2,
	regulationMark: "D"
}

export default card