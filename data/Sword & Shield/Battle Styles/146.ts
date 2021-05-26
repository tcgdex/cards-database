import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Empoleon V",
		fr: "Pingoléon V"
	},

	illustrator: "chibi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Emperor’s Eyes",
			fr: "Regard de l’Empereur"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent’s Basic Pokémon in play have no Abilities, except for Pokémon with a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes).",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les Pokémon de base en jeu de votre adversaire n’ont pas de talent, à l’exception des Pokémon ayant un encadré Règle(les Pokémon-V, Pokémon-GX, etc. ont des encadrés Règle)."
		}
	}],

	attacks: [{
		name: {
			en: "Swirling Slice",
			fr: "Coupe Tourbillonnante"
		},

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc."
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card