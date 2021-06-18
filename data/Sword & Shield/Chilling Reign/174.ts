import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Électhor de Galar V",
		en: "Galarian Zapdos V"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Instinct de Combat",
			en: "Fighting Instinct"
		},

		effect: {
			fr: "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque Pokémon-V en jeu de votre adversaire.",
			en: "This Pokémon’s attacks cost Colorless less for each of your opponent’s Pokémon V in play."
		}
	}],

	attacks: [{
		name: {
			fr: "Coup Fulgurant",
			en: "Thunderous Kick"
		},

		effect: {
			fr: "Avant d’infliger des dégâts, défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			en: "Before doing damage, discard a Special Energy from your opponent’s Active Pokémon."
		},

		damage: 170,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card