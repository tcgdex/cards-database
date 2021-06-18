import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Weezing",
		fr: "Smogogo de Galar"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Energy Factory",
			fr: "Usine d’Énergie"
		},

		effect: {
			en: "Each basic Darkness Energy attached to your Pokémon that have “Weezing” in their name provides DarknessDarkness Energy. You can’t apply more than 1 Energy Factory Ability at a time.",
			fr: "Chaque Énergie Darkness de base attachée à vos Pokémon ayant « Smogogo » dans leur nom fournit de l’Énergie DarknessDarkness. Vous ne pouvez utiliser qu’un talent Usine d’Énergie à la fois."
		}
	}],

	attacks: [{
		name: {
			en: "Suffocating Gas",
			fr: "Gaz Suffocant"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card