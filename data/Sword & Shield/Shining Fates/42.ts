import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Smogogo de Galar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Smogo"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Gaz Inhibiteur"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, les Pokémon en jeu de votre adversaire n’ont pas de talent, à l’exception de Gaz Inhibiteur."
		}
	}],

	attacks: [{
		name: {
			fr: "Poison Violent"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d’un sur ce Pokémon-là pendant le Contrôle Pokémon."
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card