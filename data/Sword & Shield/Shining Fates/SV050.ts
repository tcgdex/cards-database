import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Corayôme de Galar",
		en: "Galarian Cursola"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Corayon de Galar",
		en: "Galarian Corsola"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Corps Condamné",
			en: "Perish Body"
		},

		effect: {
			fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, lancez une pièce. Si c’est face, le Pokémon Attaquant est mis K.O.",
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an opponent’s attack, flip a coin. If heads, the Attacking Pokémon is Knocked Out."
		}
	}],

	attacks: [{
		name: {
			fr: "Coinçage",
			en: "Corner"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent’s next turn, the Defending Pokémon can’t retreat."
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card