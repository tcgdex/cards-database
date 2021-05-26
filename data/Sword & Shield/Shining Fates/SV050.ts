import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Corayôme de Galar"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Corayon de Galar"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Corps Condamné"
		},

		effect: {
			fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, lancez une pièce. Si c’est face, le Pokémon Attaquant est mis K.O."
		}
	}],

	attacks: [{
		name: {
			fr: "Coinçage"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
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

	retreat: 2
}

export default card