import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Angoliath",
		en: "Grimmsnarl"
	},

	illustrator: "Kouki Saitou",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Fourbelin",
		en: "Morgrem"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Serment Obscur",
			en: "Dark Oath"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques du Pokémon Actif de votre adversaire coûtent Colorless de plus.",
			en: "As long as this Pokémon is in the Active Spot, your opponent’s Active Pokémon’s attacks cost Colorless more."
		}
	}],

	attacks: [{
		name: {
			fr: "Pression Énergétique",
			en: "Energy Press"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon."
		},

		damage: "100+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card