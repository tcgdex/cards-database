import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Weezing",
		fr: "Smogogo de Galar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Neutralizing Gas",
				fr: "Gaz Inhibiteur"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, your opponent’s Pokémon in play have no Abilities, except for Neutralizing Gas.",
				fr: "Tant que ce Pokémon est sur le Poste Actif, les Pokémon en jeu de votre adversaire n’ont pas de talent, à l’exception de Gaz Inhibiteur."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Severe Poison",
				fr: "Poison Violent"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon during Pokémon Checkup.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d’un sur ce Pokémon-là pendant le Contrôle Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 130,
	types: ["Darkness"]
}

export default card
