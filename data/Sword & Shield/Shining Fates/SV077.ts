import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Smogogo de Galar",
		en: "Galarian Weezing"
	},

	illustrator: "Kouki Saitou",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Smogo",
		en: "Koffing"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Gaz Inhibiteur",
			en: "Neutralizing Gas"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, les Pokémon en jeu de votre adversaire n’ont pas de talent, à l’exception de Gaz Inhibiteur.",
			en: "As long as this Pokémon is in the Active Spot, your opponent’s Pokémon in play have no Abilities, except for Neutralizing Gas."
		}
	}],

	attacks: [{
		name: {
			fr: "Poison Violent",
			en: "Severe Poison"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d’un sur ce Pokémon-là pendant le Contrôle Pokémon.",
			en: "Your opponent’s Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon during Pokémon Checkup."
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